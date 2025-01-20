(function() {
    var type_impls = Object.fromEntries([["bevy_audio",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Bundle-for-AudioSourceBundle%3CSource%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bevy_audio/audio.rs.html#287\">Source</a><a href=\"#impl-Bundle-for-AudioSourceBundle%3CSource%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Source&gt; <a class=\"trait\" href=\"bevy_ecs/bundle/trait.Bundle.html\" title=\"trait bevy_ecs::bundle::Bundle\">Bundle</a> for <a class=\"struct\" href=\"bevy_audio/struct.AudioSourceBundle.html\" title=\"struct bevy_audio::AudioSourceBundle\">AudioSourceBundle</a>&lt;Source&gt;<div class=\"where\">where\n    Source: <a class=\"trait\" href=\"bevy_asset/trait.Asset.html\" title=\"trait bevy_asset::Asset\">Asset</a> + <a class=\"trait\" href=\"bevy_audio/trait.Decodable.html\" title=\"trait bevy_audio::Decodable\">Decodable</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_component_ids\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_audio/audio.rs.html#287\">Source</a><a href=\"#method.get_component_ids\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy_ecs/bundle/trait.Bundle.html#tymethod.get_component_ids\" class=\"fn\">get_component_ids</a>(\n    components: &amp;<a class=\"struct\" href=\"bevy_ecs/component/struct.Components.html\" title=\"struct bevy_ecs::component::Components\">Components</a>,\n    ids: &amp;mut impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(<a class=\"enum\" href=\"https://doc.rust-lang.org/1.84.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"bevy_ecs/component/struct.ComponentId.html\" title=\"struct bevy_ecs::component::ComponentId\">ComponentId</a>&gt;),\n)</h4></section></summary><div class='docblock'>Gets this <a href=\"bevy_ecs/bundle/trait.Bundle.html\" title=\"trait bevy_ecs::bundle::Bundle\"><code>Bundle</code></a>’s component ids. This will be <a href=\"https://doc.rust-lang.org/1.84.0/core/option/enum.Option.html#variant.None\" title=\"variant core::option::Option::None\"><code>None</code></a> if the component has not been registered.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.register_required_components\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_audio/audio.rs.html#287\">Source</a><a href=\"#method.register_required_components\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bevy_ecs/bundle/trait.Bundle.html#tymethod.register_required_components\" class=\"fn\">register_required_components</a>(\n    components: &amp;mut <a class=\"struct\" href=\"bevy_ecs/component/struct.Components.html\" title=\"struct bevy_ecs::component::Components\">Components</a>,\n    storages: &amp;mut <a class=\"struct\" href=\"bevy_ecs/storage/struct.Storages.html\" title=\"struct bevy_ecs::storage::Storages\">Storages</a>,\n    required_components: &amp;mut <a class=\"struct\" href=\"bevy_ecs/component/struct.RequiredComponents.html\" title=\"struct bevy_ecs::component::RequiredComponents\">RequiredComponents</a>,\n)</h4></section></summary><div class='docblock'>Registers components that are required by the components in this <a href=\"bevy_ecs/bundle/trait.Bundle.html\" title=\"trait bevy_ecs::bundle::Bundle\"><code>Bundle</code></a>.</div></details></div></details>","Bundle","bevy_audio::audio::AudioBundle","bevy_audio::pitch::PitchBundle"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-AudioSourceBundle%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bevy_audio/audio.rs.html#305-312\">Source</a><a href=\"#impl-Clone-for-AudioSourceBundle%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"bevy_asset/trait.Asset.html\" title=\"trait bevy_asset::Asset\">Asset</a> + <a class=\"trait\" href=\"bevy_audio/trait.Decodable.html\" title=\"trait bevy_audio::Decodable\">Decodable</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"bevy_audio/struct.AudioSourceBundle.html\" title=\"struct bevy_audio::AudioSourceBundle\">AudioSourceBundle</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_audio/audio.rs.html#306-311\">Source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.84.0/src/core/clone.rs.html#174\">Source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","bevy_audio::audio::AudioBundle","bevy_audio::pitch::PitchBundle"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-AudioSourceBundle%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bevy_audio/audio.rs.html#314-321\">Source</a><a href=\"#impl-Default-for-AudioSourceBundle%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"bevy_audio/trait.Decodable.html\" title=\"trait bevy_audio::Decodable\">Decodable</a> + <a class=\"trait\" href=\"bevy_asset/trait.Asset.html\" title=\"trait bevy_asset::Asset\">Asset</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"bevy_audio/struct.AudioSourceBundle.html\" title=\"struct bevy_audio::AudioSourceBundle\">AudioSourceBundle</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_audio/audio.rs.html#315-320\">Source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; Self</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.84.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","bevy_audio::audio::AudioBundle","bevy_audio::pitch::PitchBundle"],["<section id=\"impl-DynamicBundle-for-AudioSourceBundle%3CSource%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bevy_audio/audio.rs.html#287\">Source</a><a href=\"#impl-DynamicBundle-for-AudioSourceBundle%3CSource%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Source&gt; <a class=\"trait\" href=\"bevy_ecs/bundle/trait.DynamicBundle.html\" title=\"trait bevy_ecs::bundle::DynamicBundle\">DynamicBundle</a> for <a class=\"struct\" href=\"bevy_audio/struct.AudioSourceBundle.html\" title=\"struct bevy_audio::AudioSourceBundle\">AudioSourceBundle</a>&lt;Source&gt;<div class=\"where\">where\n    Source: <a class=\"trait\" href=\"bevy_asset/trait.Asset.html\" title=\"trait bevy_asset::Asset\">Asset</a> + <a class=\"trait\" href=\"bevy_audio/trait.Decodable.html\" title=\"trait bevy_audio::Decodable\">Decodable</a>,</div></h3></section>","DynamicBundle","bevy_audio::audio::AudioBundle","bevy_audio::pitch::PitchBundle"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[8571]}