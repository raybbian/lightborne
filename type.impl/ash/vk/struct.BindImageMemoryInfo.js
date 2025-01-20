(function() {
    var type_impls = Object.fromEntries([["ash",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BindImageMemoryInfo%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#14194-14224\">Source</a><a href=\"#impl-BindImageMemoryInfo%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"struct\" href=\"ash/vk/struct.BindImageMemoryInfo.html\" title=\"struct ash::vk::BindImageMemoryInfo\">BindImageMemoryInfo</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.image\" class=\"method\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#14196-14199\">Source</a><h4 class=\"code-header\">pub fn <a href=\"ash/vk/struct.BindImageMemoryInfo.html#tymethod.image\" class=\"fn\">image</a>(self, image: <a class=\"struct\" href=\"ash/vk/struct.Image.html\" title=\"struct ash::vk::Image\">Image</a>) -&gt; Self</h4></section><section id=\"method.memory\" class=\"method\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#14201-14204\">Source</a><h4 class=\"code-header\">pub fn <a href=\"ash/vk/struct.BindImageMemoryInfo.html#tymethod.memory\" class=\"fn\">memory</a>(self, memory: <a class=\"struct\" href=\"ash/vk/struct.DeviceMemory.html\" title=\"struct ash::vk::DeviceMemory\">DeviceMemory</a>) -&gt; Self</h4></section><section id=\"method.memory_offset\" class=\"method\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#14206-14209\">Source</a><h4 class=\"code-header\">pub fn <a href=\"ash/vk/struct.BindImageMemoryInfo.html#tymethod.memory_offset\" class=\"fn\">memory_offset</a>(self, memory_offset: <a class=\"type\" href=\"ash/vk/type.DeviceSize.html\" title=\"type ash::vk::DeviceSize\">DeviceSize</a>) -&gt; Self</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.push_next\" class=\"method\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#14215-14223\">Source</a><h4 class=\"code-header\">pub fn <a href=\"ash/vk/struct.BindImageMemoryInfo.html#tymethod.push_next\" class=\"fn\">push_next</a>&lt;T: <a class=\"trait\" href=\"ash/vk/trait.ExtendsBindImageMemoryInfo.html\" title=\"trait ash::vk::ExtendsBindImageMemoryInfo\">ExtendsBindImageMemoryInfo</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt;(\n    self,\n    next: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.reference.html\">&amp;'a mut T</a>,\n) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Prepends the given extension struct between the root and the first pointer. This\nmethod only exists on structs that can be passed to a function directly. Only\nvalid extension structs can be pushed into the chain.\nIf the chain looks like <code>A -&gt; B -&gt; C</code>, and you call <code>x.push_next(&amp;mut D)</code>, then the\nchain will look like <code>A -&gt; D -&gt; B -&gt; C</code>.</p>\n</div></details></div></details>",0,"ash::vk::aliases::BindImageMemoryInfoKHR"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-BindImageMemoryInfo%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#14164\">Source</a><a href=\"#impl-Clone-for-BindImageMemoryInfo%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"ash/vk/struct.BindImageMemoryInfo.html\" title=\"struct ash::vk::BindImageMemoryInfo\">BindImageMemoryInfo</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#14164\">Source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"ash/vk/struct.BindImageMemoryInfo.html\" title=\"struct ash::vk::BindImageMemoryInfo\">BindImageMemoryInfo</a>&lt;'a&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.84.0/src/core/clone.rs.html#174\">Source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","ash::vk::aliases::BindImageMemoryInfoKHR"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-BindImageMemoryInfo%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#14163\">Source</a><a href=\"#impl-Debug-for-BindImageMemoryInfo%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"ash/vk/struct.BindImageMemoryInfo.html\" title=\"struct ash::vk::BindImageMemoryInfo\">BindImageMemoryInfo</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#14163\">Source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","ash::vk::aliases::BindImageMemoryInfoKHR"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-BindImageMemoryInfo%3C'_%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#14177-14189\">Source</a><a href=\"#impl-Default-for-BindImageMemoryInfo%3C'_%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"ash/vk/struct.BindImageMemoryInfo.html\" title=\"struct ash::vk::BindImageMemoryInfo\">BindImageMemoryInfo</a>&lt;'_&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#14179-14188\">Source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; Self</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.84.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","ash::vk::aliases::BindImageMemoryInfoKHR"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TaggedStructure-for-BindImageMemoryInfo%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#14190-14192\">Source</a><a href=\"#impl-TaggedStructure-for-BindImageMemoryInfo%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"ash/vk/trait.TaggedStructure.html\" title=\"trait ash::vk::TaggedStructure\">TaggedStructure</a> for <a class=\"struct\" href=\"ash/vk/struct.BindImageMemoryInfo.html\" title=\"struct ash::vk::BindImageMemoryInfo\">BindImageMemoryInfo</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"associatedconstant.STRUCTURE_TYPE\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#14191\">Source</a><a href=\"#associatedconstant.STRUCTURE_TYPE\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"ash/vk/trait.TaggedStructure.html#associatedconstant.STRUCTURE_TYPE\" class=\"constant\">STRUCTURE_TYPE</a>: <a class=\"struct\" href=\"ash/vk/struct.StructureType.html\" title=\"struct ash::vk::StructureType\">StructureType</a> = StructureType::BIND_IMAGE_MEMORY_INFO</h4></section></div></details>","TaggedStructure","ash::vk::aliases::BindImageMemoryInfoKHR"],["<section id=\"impl-Copy-for-BindImageMemoryInfo%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#14164\">Source</a><a href=\"#impl-Copy-for-BindImageMemoryInfo%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"ash/vk/struct.BindImageMemoryInfo.html\" title=\"struct ash::vk::BindImageMemoryInfo\">BindImageMemoryInfo</a>&lt;'a&gt;</h3></section>","Copy","ash::vk::aliases::BindImageMemoryInfoKHR"],["<section id=\"impl-Send-for-BindImageMemoryInfo%3C'_%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#14175\">Source</a><a href=\"#impl-Send-for-BindImageMemoryInfo%3C'_%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"ash/vk/struct.BindImageMemoryInfo.html\" title=\"struct ash::vk::BindImageMemoryInfo\">BindImageMemoryInfo</a>&lt;'_&gt;</h3></section>","Send","ash::vk::aliases::BindImageMemoryInfoKHR"],["<section id=\"impl-Sync-for-BindImageMemoryInfo%3C'_%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#14176\">Source</a><a href=\"#impl-Sync-for-BindImageMemoryInfo%3C'_%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"ash/vk/struct.BindImageMemoryInfo.html\" title=\"struct ash::vk::BindImageMemoryInfo\">BindImageMemoryInfo</a>&lt;'_&gt;</h3></section>","Sync","ash::vk::aliases::BindImageMemoryInfoKHR"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[11567]}