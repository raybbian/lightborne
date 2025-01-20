(function() {
    var type_impls = Object.fromEntries([["bevy_ecs_tilemap",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Bundle-for-MaterialTilemapBundle%3CM%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bevy_ecs_tilemap/lib.rs.html#115\">Source</a><a href=\"#impl-Bundle-for-MaterialTilemapBundle%3CM%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;M: <a class=\"trait\" href=\"bevy_ecs_tilemap/prelude/trait.MaterialTilemap.html\" title=\"trait bevy_ecs_tilemap::prelude::MaterialTilemap\">MaterialTilemap</a>&gt; <a class=\"trait\" href=\"bevy_ecs/bundle/trait.Bundle.html\" title=\"trait bevy_ecs::bundle::Bundle\">Bundle</a> for <a class=\"struct\" href=\"bevy_ecs_tilemap/struct.MaterialTilemapBundle.html\" title=\"struct bevy_ecs_tilemap::MaterialTilemapBundle\">MaterialTilemapBundle</a>&lt;M&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_component_ids\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs_tilemap/lib.rs.html#115\">Source</a><a href=\"#method.get_component_ids\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy_ecs/bundle/trait.Bundle.html#tymethod.get_component_ids\" class=\"fn\">get_component_ids</a>(\n    components: &amp;<a class=\"struct\" href=\"bevy_ecs/component/struct.Components.html\" title=\"struct bevy_ecs::component::Components\">Components</a>,\n    ids: &amp;mut impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(<a class=\"enum\" href=\"https://doc.rust-lang.org/1.84.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"bevy_ecs/component/struct.ComponentId.html\" title=\"struct bevy_ecs::component::ComponentId\">ComponentId</a>&gt;),\n)</h4></section></summary><div class='docblock'>Gets this <a href=\"bevy_ecs/bundle/trait.Bundle.html\" title=\"trait bevy_ecs::bundle::Bundle\"><code>Bundle</code></a>’s component ids. This will be <a href=\"https://doc.rust-lang.org/1.84.0/core/option/enum.Option.html#variant.None\" title=\"variant core::option::Option::None\"><code>None</code></a> if the component has not been registered.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.register_required_components\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs_tilemap/lib.rs.html#115\">Source</a><a href=\"#method.register_required_components\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy_ecs/bundle/trait.Bundle.html#tymethod.register_required_components\" class=\"fn\">register_required_components</a>(\n    components: &amp;mut <a class=\"struct\" href=\"bevy_ecs/component/struct.Components.html\" title=\"struct bevy_ecs::component::Components\">Components</a>,\n    storages: &amp;mut <a class=\"struct\" href=\"bevy_ecs/storage/struct.Storages.html\" title=\"struct bevy_ecs::storage::Storages\">Storages</a>,\n    required_components: &amp;mut <a class=\"struct\" href=\"bevy_ecs/component/struct.RequiredComponents.html\" title=\"struct bevy_ecs::component::RequiredComponents\">RequiredComponents</a>,\n)</h4></section></summary><div class='docblock'>Registers components that are required by the components in this <a href=\"bevy_ecs/bundle/trait.Bundle.html\" title=\"trait bevy_ecs::bundle::Bundle\"><code>Bundle</code></a>.</div></details></div></details>","Bundle","bevy_ecs_tilemap::TilemapBundle"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-MaterialTilemapBundle%3CM%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bevy_ecs_tilemap/lib.rs.html#115\">Source</a><a href=\"#impl-Clone-for-MaterialTilemapBundle%3CM%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;M: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"bevy_ecs_tilemap/prelude/trait.MaterialTilemap.html\" title=\"trait bevy_ecs_tilemap::prelude::MaterialTilemap\">MaterialTilemap</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"bevy_ecs_tilemap/struct.MaterialTilemapBundle.html\" title=\"struct bevy_ecs_tilemap::MaterialTilemapBundle\">MaterialTilemapBundle</a>&lt;M&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs_tilemap/lib.rs.html#115\">Source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"bevy_ecs_tilemap/struct.MaterialTilemapBundle.html\" title=\"struct bevy_ecs_tilemap::MaterialTilemapBundle\">MaterialTilemapBundle</a>&lt;M&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.84.0/src/core/clone.rs.html#174\">Source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","bevy_ecs_tilemap::TilemapBundle"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-MaterialTilemapBundle%3CM%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bevy_ecs_tilemap/lib.rs.html#115\">Source</a><a href=\"#impl-Debug-for-MaterialTilemapBundle%3CM%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;M: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"bevy_ecs_tilemap/prelude/trait.MaterialTilemap.html\" title=\"trait bevy_ecs_tilemap::prelude::MaterialTilemap\">MaterialTilemap</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"bevy_ecs_tilemap/struct.MaterialTilemapBundle.html\" title=\"struct bevy_ecs_tilemap::MaterialTilemapBundle\">MaterialTilemapBundle</a>&lt;M&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs_tilemap/lib.rs.html#115\">Source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","bevy_ecs_tilemap::TilemapBundle"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-MaterialTilemapBundle%3CM%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bevy_ecs_tilemap/lib.rs.html#115\">Source</a><a href=\"#impl-Default-for-MaterialTilemapBundle%3CM%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;M: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"bevy_ecs_tilemap/prelude/trait.MaterialTilemap.html\" title=\"trait bevy_ecs_tilemap::prelude::MaterialTilemap\">MaterialTilemap</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"bevy_ecs_tilemap/struct.MaterialTilemapBundle.html\" title=\"struct bevy_ecs_tilemap::MaterialTilemapBundle\">MaterialTilemapBundle</a>&lt;M&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_ecs_tilemap/lib.rs.html#115\">Source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"bevy_ecs_tilemap/struct.MaterialTilemapBundle.html\" title=\"struct bevy_ecs_tilemap::MaterialTilemapBundle\">MaterialTilemapBundle</a>&lt;M&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.84.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","bevy_ecs_tilemap::TilemapBundle"],["<section id=\"impl-DynamicBundle-for-MaterialTilemapBundle%3CM%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bevy_ecs_tilemap/lib.rs.html#115\">Source</a><a href=\"#impl-DynamicBundle-for-MaterialTilemapBundle%3CM%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;M: <a class=\"trait\" href=\"bevy_ecs_tilemap/prelude/trait.MaterialTilemap.html\" title=\"trait bevy_ecs_tilemap::prelude::MaterialTilemap\">MaterialTilemap</a>&gt; <a class=\"trait\" href=\"bevy_ecs/bundle/trait.DynamicBundle.html\" title=\"trait bevy_ecs::bundle::DynamicBundle\">DynamicBundle</a> for <a class=\"struct\" href=\"bevy_ecs_tilemap/struct.MaterialTilemapBundle.html\" title=\"struct bevy_ecs_tilemap::MaterialTilemapBundle\">MaterialTilemapBundle</a>&lt;M&gt;</h3></section>","DynamicBundle","bevy_ecs_tilemap::TilemapBundle"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[10800]}