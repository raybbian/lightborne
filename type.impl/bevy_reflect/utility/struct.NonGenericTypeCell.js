(function() {
    var type_impls = Object.fromEntries([["bevy_reflect",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-NonGenericTypeCell%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bevy_reflect/utility.rs.html#121-125\">Source</a><a href=\"#impl-Default-for-NonGenericTypeCell%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"bevy_reflect/utility/trait.TypedProperty.html\" title=\"trait bevy_reflect::utility::TypedProperty\">TypedProperty</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"bevy_reflect/utility/struct.NonGenericTypeCell.html\" title=\"struct bevy_reflect::utility::NonGenericTypeCell\">NonGenericTypeCell</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bevy_reflect/utility.rs.html#122-124\">Source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; Self</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.84.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","bevy_reflect::utility::NonGenericTypeInfoCell"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-NonGenericTypeCell%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bevy_reflect/utility.rs.html#104-119\">Source</a><a href=\"#impl-NonGenericTypeCell%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"bevy_reflect/utility/trait.TypedProperty.html\" title=\"trait bevy_reflect::utility::TypedProperty\">TypedProperty</a>&gt; <a class=\"struct\" href=\"bevy_reflect/utility/struct.NonGenericTypeCell.html\" title=\"struct bevy_reflect::utility::NonGenericTypeCell\">NonGenericTypeCell</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/bevy_reflect/utility.rs.html#106-108\">Source</a><h4 class=\"code-header\">pub const fn <a href=\"bevy_reflect/utility/struct.NonGenericTypeCell.html#tymethod.new\" class=\"fn\">new</a>() -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Initialize a <a href=\"bevy_reflect/utility/struct.NonGenericTypeCell.html\" title=\"struct bevy_reflect::utility::NonGenericTypeCell\"><code>NonGenericTypeCell</code></a> for non-generic types.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_or_set\" class=\"method\"><a class=\"src rightside\" href=\"src/bevy_reflect/utility.rs.html#113-118\">Source</a><h4 class=\"code-header\">pub fn <a href=\"bevy_reflect/utility/struct.NonGenericTypeCell.html#tymethod.get_or_set\" class=\"fn\">get_or_set</a>&lt;F&gt;(&amp;self, f: F) -&gt; &amp;T::<a class=\"associatedtype\" href=\"bevy_reflect/utility/trait.TypedProperty.html#associatedtype.Stored\" title=\"type bevy_reflect::utility::TypedProperty::Stored\">Stored</a><div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>() -&gt; T::<a class=\"associatedtype\" href=\"bevy_reflect/utility/trait.TypedProperty.html#associatedtype.Stored\" title=\"type bevy_reflect::utility::TypedProperty::Stored\">Stored</a>,</div></h4></section></summary><div class=\"docblock\"><p>Returns a reference to the <a href=\"bevy_reflect/utility/trait.TypedProperty.html\" title=\"trait bevy_reflect::utility::TypedProperty\"><code>TypedProperty</code></a> stored in the cell.</p>\n<p>If there is no entry found, a new one will be generated from the given function.</p>\n</div></details></div></details>",0,"bevy_reflect::utility::NonGenericTypeInfoCell"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[4218]}