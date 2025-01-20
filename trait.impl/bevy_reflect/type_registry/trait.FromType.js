(function() {
    var implementors = Object.fromEntries([["bevy",[]],["bevy_asset",[["impl&lt;A: <a class=\"trait\" href=\"bevy_asset/trait.Asset.html\" title=\"trait bevy_asset::Asset\">Asset</a> + <a class=\"trait\" href=\"bevy_reflect/from_reflect/trait.FromReflect.html\" title=\"trait bevy_reflect::from_reflect::FromReflect\">FromReflect</a>&gt; <a class=\"trait\" href=\"bevy_reflect/type_registry/trait.FromType.html\" title=\"trait bevy_reflect::type_registry::FromType\">FromType</a>&lt;A&gt; for <a class=\"struct\" href=\"bevy_asset/struct.ReflectAsset.html\" title=\"struct bevy_asset::ReflectAsset\">ReflectAsset</a>"],["impl&lt;A: <a class=\"trait\" href=\"bevy_asset/trait.Asset.html\" title=\"trait bevy_asset::Asset\">Asset</a>&gt; <a class=\"trait\" href=\"bevy_reflect/type_registry/trait.FromType.html\" title=\"trait bevy_reflect::type_registry::FromType\">FromType</a>&lt;<a class=\"enum\" href=\"bevy_asset/enum.Handle.html\" title=\"enum bevy_asset::Handle\">Handle</a>&lt;A&gt;&gt; for <a class=\"struct\" href=\"bevy_asset/struct.ReflectHandle.html\" title=\"struct bevy_asset::ReflectHandle\">ReflectHandle</a>"]]],["bevy_ecs",[["impl&lt;B: <a class=\"trait\" href=\"bevy_ecs/bundle/trait.Bundle.html\" title=\"trait bevy_ecs::bundle::Bundle\">Bundle</a> + <a class=\"trait\" href=\"bevy_reflect/reflect/trait.Reflect.html\" title=\"trait bevy_reflect::reflect::Reflect\">Reflect</a> + <a class=\"trait\" href=\"bevy_reflect/type_path/trait.TypePath.html\" title=\"trait bevy_reflect::type_path::TypePath\">TypePath</a>&gt; <a class=\"trait\" href=\"bevy_reflect/type_registry/trait.FromType.html\" title=\"trait bevy_reflect::type_registry::FromType\">FromType</a>&lt;B&gt; for <a class=\"struct\" href=\"bevy_ecs/reflect/struct.ReflectBundle.html\" title=\"struct bevy_ecs::reflect::ReflectBundle\">ReflectBundle</a>"],["impl&lt;B: <a class=\"trait\" href=\"bevy_reflect/reflect/trait.Reflect.html\" title=\"trait bevy_reflect::reflect::Reflect\">Reflect</a> + <a class=\"trait\" href=\"bevy_ecs/world/trait.FromWorld.html\" title=\"trait bevy_ecs::world::FromWorld\">FromWorld</a>&gt; <a class=\"trait\" href=\"bevy_reflect/type_registry/trait.FromType.html\" title=\"trait bevy_reflect::type_registry::FromType\">FromType</a>&lt;B&gt; for <a class=\"struct\" href=\"bevy_ecs/reflect/struct.ReflectFromWorld.html\" title=\"struct bevy_ecs::reflect::ReflectFromWorld\">ReflectFromWorld</a>"],["impl&lt;C: <a class=\"trait\" href=\"bevy_ecs/component/trait.Component.html\" title=\"trait bevy_ecs::component::Component\">Component</a> + <a class=\"trait\" href=\"bevy_reflect/reflect/trait.Reflect.html\" title=\"trait bevy_reflect::reflect::Reflect\">Reflect</a> + <a class=\"trait\" href=\"bevy_reflect/type_path/trait.TypePath.html\" title=\"trait bevy_reflect::type_path::TypePath\">TypePath</a>&gt; <a class=\"trait\" href=\"bevy_reflect/type_registry/trait.FromType.html\" title=\"trait bevy_reflect::type_registry::FromType\">FromType</a>&lt;C&gt; for <a class=\"struct\" href=\"bevy_ecs/reflect/struct.ReflectComponent.html\" title=\"struct bevy_ecs::reflect::ReflectComponent\">ReflectComponent</a>"],["impl&lt;C: <a class=\"trait\" href=\"bevy_reflect/from_reflect/trait.FromReflect.html\" title=\"trait bevy_reflect::from_reflect::FromReflect\">FromReflect</a> + <a class=\"trait\" href=\"bevy_ecs/entity/trait.MapEntities.html\" title=\"trait bevy_ecs::entity::MapEntities\">MapEntities</a>&gt; <a class=\"trait\" href=\"bevy_reflect/type_registry/trait.FromType.html\" title=\"trait bevy_reflect::type_registry::FromType\">FromType</a>&lt;C&gt; for <a class=\"struct\" href=\"bevy_ecs/reflect/struct.ReflectMapEntities.html\" title=\"struct bevy_ecs::reflect::ReflectMapEntities\">ReflectMapEntities</a>"],["impl&lt;C: <a class=\"trait\" href=\"bevy_reflect/from_reflect/trait.FromReflect.html\" title=\"trait bevy_reflect::from_reflect::FromReflect\">FromReflect</a> + <a class=\"trait\" href=\"bevy_ecs/entity/trait.VisitEntities.html\" title=\"trait bevy_ecs::entity::VisitEntities\">VisitEntities</a>&gt; <a class=\"trait\" href=\"bevy_reflect/type_registry/trait.FromType.html\" title=\"trait bevy_reflect::type_registry::FromType\">FromType</a>&lt;C&gt; for <a class=\"struct\" href=\"bevy_ecs/reflect/struct.ReflectVisitEntities.html\" title=\"struct bevy_ecs::reflect::ReflectVisitEntities\">ReflectVisitEntities</a>"],["impl&lt;C: <a class=\"trait\" href=\"bevy_reflect/from_reflect/trait.FromReflect.html\" title=\"trait bevy_reflect::from_reflect::FromReflect\">FromReflect</a> + <a class=\"trait\" href=\"bevy_ecs/entity/trait.VisitEntitiesMut.html\" title=\"trait bevy_ecs::entity::VisitEntitiesMut\">VisitEntitiesMut</a>&gt; <a class=\"trait\" href=\"bevy_reflect/type_registry/trait.FromType.html\" title=\"trait bevy_reflect::type_registry::FromType\">FromType</a>&lt;C&gt; for <a class=\"struct\" href=\"bevy_ecs/reflect/struct.ReflectVisitEntitiesMut.html\" title=\"struct bevy_ecs::reflect::ReflectVisitEntitiesMut\">ReflectVisitEntitiesMut</a>"],["impl&lt;R: <a class=\"trait\" href=\"bevy_ecs/system/trait.Resource.html\" title=\"trait bevy_ecs::system::Resource\">Resource</a> + <a class=\"trait\" href=\"bevy_reflect/from_reflect/trait.FromReflect.html\" title=\"trait bevy_reflect::from_reflect::FromReflect\">FromReflect</a> + <a class=\"trait\" href=\"bevy_reflect/type_path/trait.TypePath.html\" title=\"trait bevy_reflect::type_path::TypePath\">TypePath</a>&gt; <a class=\"trait\" href=\"bevy_reflect/type_registry/trait.FromType.html\" title=\"trait bevy_reflect::type_registry::FromType\">FromType</a>&lt;R&gt; for <a class=\"struct\" href=\"bevy_ecs/reflect/struct.ReflectResource.html\" title=\"struct bevy_ecs::reflect::ReflectResource\">ReflectResource</a>"]]],["bevy_reflect",[]],["bevy_state",[["impl&lt;S: <a class=\"trait\" href=\"bevy_state/state/trait.FreelyMutableState.html\" title=\"trait bevy_state::state::FreelyMutableState\">FreelyMutableState</a> + <a class=\"trait\" href=\"bevy_reflect/reflect/trait.Reflect.html\" title=\"trait bevy_reflect::reflect::Reflect\">Reflect</a> + <a class=\"trait\" href=\"bevy_reflect/type_path/trait.TypePath.html\" title=\"trait bevy_reflect::type_path::TypePath\">TypePath</a>&gt; <a class=\"trait\" href=\"bevy_reflect/type_registry/trait.FromType.html\" title=\"trait bevy_reflect::type_registry::FromType\">FromType</a>&lt;S&gt; for <a class=\"struct\" href=\"bevy_state/reflect/struct.ReflectFreelyMutableState.html\" title=\"struct bevy_state::reflect::ReflectFreelyMutableState\">ReflectFreelyMutableState</a>"],["impl&lt;S: <a class=\"trait\" href=\"bevy_state/state/trait.States.html\" title=\"trait bevy_state::state::States\">States</a> + <a class=\"trait\" href=\"bevy_reflect/reflect/trait.Reflect.html\" title=\"trait bevy_reflect::reflect::Reflect\">Reflect</a>&gt; <a class=\"trait\" href=\"bevy_reflect/type_registry/trait.FromType.html\" title=\"trait bevy_reflect::type_registry::FromType\">FromType</a>&lt;S&gt; for <a class=\"struct\" href=\"bevy_state/reflect/struct.ReflectState.html\" title=\"struct bevy_state::reflect::ReflectState\">ReflectState</a>"]]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[11,1074,4594,20,1348]}