use bevy::prelude::*;
use bevy_rapier2d::{math::Real, plugin::RapierContext, prelude::CollisionGroups, prelude::*};
use enum_map::EnumMap;

use crate::{
    input::CursorWorldCoords,
    light::{LightColor, LightRaySource},
    shared::GroupLabel,
};

use super::PlayerMarker;

#[derive(Component, Default)]
pub struct PlayerLightInventory {
    current_color: LightColor,
    sources: EnumMap<LightColor, Option<Entity>>,
}

pub fn handle_color_switch(
    keys: Res<ButtonInput<KeyCode>>,
    mut q_inventory: Query<&mut PlayerLightInventory>,
) {
    let Ok(mut inventory) = q_inventory.get_single_mut() else {
        return;
    };
    if keys.just_pressed(KeyCode::Digit1) {
        inventory.current_color = LightColor::Green;
    }
    if keys.just_pressed(KeyCode::Digit2) {
        inventory.current_color = LightColor::Red;
    }
    if keys.just_pressed(KeyCode::Digit3) {
        inventory.current_color = LightColor::White;
    }
}

pub fn shoot_light(
    mut commands: Commands,
    mut q_player: Query<(&Transform, &mut PlayerLightInventory), With<PlayerMarker>>,
    q_cursor: Query<&CursorWorldCoords>,
) {
    let Ok((player_transform, mut player_inventory)) = q_player.get_single_mut() else {
        return;
    };
    let Ok(cursor_pos) = q_cursor.get_single() else {
        return;
    };
    if player_inventory.sources[player_inventory.current_color].is_some() {
        return;
    }

    let ray_pos = player_transform.translation.truncate();
    let ray_dir = (cursor_pos.pos - ray_pos).normalize_or_zero();

    if ray_dir == Vec2::ZERO {
        return;
    }

    let id = commands
        .spawn(LightRaySource {
            start_pos: ray_pos,
            start_dir: ray_dir,
            time_traveled: 0.0,
            color: player_inventory.current_color,
        })
        .id();

    // Bevy's Mut or ResMut doesn't let you borrow multiple fields of a struct, so sometimes you
    // need to "reborrow" it to turn it into &mut. See https://bevy-cheatbook.github.io/pitfalls/split-borrows.html
    let player_inventory = &mut *player_inventory;
    player_inventory.sources[player_inventory.current_color] = Some(id);
}

// FIXME: duplicate code with some of light module, should be made common function
pub fn preview_light_path(
    mut q_rapier: Query<&mut RapierContext>,
    q_player: Query<(&Transform, &PlayerLightInventory), With<PlayerMarker>>,
    q_cursor: Query<&CursorWorldCoords>,
    mut gizmos: Gizmos,
) {
    let Ok(rapier_context) = q_rapier.get_single_mut() else {
        return;
    };
    let Ok((transform, inventory)) = q_player.get_single() else {
        return;
    };
    let Ok(cursor_pos) = q_cursor.get_single() else {
        return;
    };
    if inventory.sources[inventory.current_color].is_some() {
        return;
    }

    let mut ray_pos = transform.translation.truncate();
    let mut ray_dir = (cursor_pos.pos - ray_pos).normalize_or_zero();

    if ray_dir == Vec2::ZERO {
        return;
    }

    let collision_groups = match inventory.current_color {
        LightColor::White => CollisionGroups::new(
            GroupLabel::WHITE_RAY,
            GroupLabel::TERRAIN | GroupLabel::LIGHT_SENSOR,
        ),
        _ => CollisionGroups::new(
            GroupLabel::LIGHT_RAY,
            GroupLabel::TERRAIN | GroupLabel::LIGHT_SENSOR | GroupLabel::WHITE_RAY,
        ),
    };

    let mut ray_qry = QueryFilter::new().groups(collision_groups);

    for _ in 0..inventory.current_color.num_bounces() + 1 {
        let Some((entity, intersection)) =
            rapier_context.cast_ray_and_get_normal(ray_pos, ray_dir, Real::MAX, true, ray_qry)
        else {
            break;
        };

        if intersection.time_of_impact < 0.01 {
            break;
        }

        gizmos.line_2d(
            ray_pos,
            intersection.point,
            Color::from(inventory.current_color).darker(0.3),
        );

        ray_pos = intersection.point;
        ray_dir = ray_dir.reflect(intersection.normal);
        ray_qry = ray_qry.exclude_collider(entity);
    }
}