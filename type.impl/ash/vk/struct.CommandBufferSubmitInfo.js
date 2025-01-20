(function() {
    var type_impls = Object.fromEntries([["ash",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-CommandBufferSubmitInfo%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#38355\">Source</a><a href=\"#impl-Clone-for-CommandBufferSubmitInfo%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"ash/vk/struct.CommandBufferSubmitInfo.html\" title=\"struct ash::vk::CommandBufferSubmitInfo\">CommandBufferSubmitInfo</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#38355\">Source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"ash/vk/struct.CommandBufferSubmitInfo.html\" title=\"struct ash::vk::CommandBufferSubmitInfo\">CommandBufferSubmitInfo</a>&lt;'a&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.84.0/src/core/clone.rs.html#174\">Source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","ash::vk::aliases::CommandBufferSubmitInfoKHR"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CommandBufferSubmitInfo%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#38383-38411\">Source</a><a href=\"#impl-CommandBufferSubmitInfo%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"struct\" href=\"ash/vk/struct.CommandBufferSubmitInfo.html\" title=\"struct ash::vk::CommandBufferSubmitInfo\">CommandBufferSubmitInfo</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.command_buffer\" class=\"method\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#38385-38388\">Source</a><h4 class=\"code-header\">pub fn <a href=\"ash/vk/struct.CommandBufferSubmitInfo.html#tymethod.command_buffer\" class=\"fn\">command_buffer</a>(self, command_buffer: <a class=\"struct\" href=\"ash/vk/struct.CommandBuffer.html\" title=\"struct ash::vk::CommandBuffer\">CommandBuffer</a>) -&gt; Self</h4></section><section id=\"method.device_mask\" class=\"method\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#38390-38393\">Source</a><h4 class=\"code-header\">pub fn <a href=\"ash/vk/struct.CommandBufferSubmitInfo.html#tymethod.device_mask\" class=\"fn\">device_mask</a>(self, device_mask: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.u32.html\">u32</a>) -&gt; Self</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.push_next\" class=\"method\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#38399-38410\">Source</a><h4 class=\"code-header\">pub fn <a href=\"ash/vk/struct.CommandBufferSubmitInfo.html#tymethod.push_next\" class=\"fn\">push_next</a>&lt;T: <a class=\"trait\" href=\"ash/vk/trait.ExtendsCommandBufferSubmitInfo.html\" title=\"trait ash::vk::ExtendsCommandBufferSubmitInfo\">ExtendsCommandBufferSubmitInfo</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt;(\n    self,\n    next: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.reference.html\">&amp;'a mut T</a>,\n) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Prepends the given extension struct between the root and the first pointer. This\nmethod only exists on structs that can be passed to a function directly. Only\nvalid extension structs can be pushed into the chain.\nIf the chain looks like <code>A -&gt; B -&gt; C</code>, and you call <code>x.push_next(&amp;mut D)</code>, then the\nchain will look like <code>A -&gt; D -&gt; B -&gt; C</code>.</p>\n</div></details></div></details>",0,"ash::vk::aliases::CommandBufferSubmitInfoKHR"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-CommandBufferSubmitInfo%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#38354\">Source</a><a href=\"#impl-Debug-for-CommandBufferSubmitInfo%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"ash/vk/struct.CommandBufferSubmitInfo.html\" title=\"struct ash::vk::CommandBufferSubmitInfo\">CommandBufferSubmitInfo</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#38354\">Source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","ash::vk::aliases::CommandBufferSubmitInfoKHR"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-CommandBufferSubmitInfo%3C'_%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#38367-38378\">Source</a><a href=\"#impl-Default-for-CommandBufferSubmitInfo%3C'_%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"ash/vk/struct.CommandBufferSubmitInfo.html\" title=\"struct ash::vk::CommandBufferSubmitInfo\">CommandBufferSubmitInfo</a>&lt;'_&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#38369-38377\">Source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; Self</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.84.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","ash::vk::aliases::CommandBufferSubmitInfoKHR"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TaggedStructure-for-CommandBufferSubmitInfo%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#38379-38381\">Source</a><a href=\"#impl-TaggedStructure-for-CommandBufferSubmitInfo%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"ash/vk/trait.TaggedStructure.html\" title=\"trait ash::vk::TaggedStructure\">TaggedStructure</a> for <a class=\"struct\" href=\"ash/vk/struct.CommandBufferSubmitInfo.html\" title=\"struct ash::vk::CommandBufferSubmitInfo\">CommandBufferSubmitInfo</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"associatedconstant.STRUCTURE_TYPE\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#38380\">Source</a><a href=\"#associatedconstant.STRUCTURE_TYPE\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"ash/vk/trait.TaggedStructure.html#associatedconstant.STRUCTURE_TYPE\" class=\"constant\">STRUCTURE_TYPE</a>: <a class=\"struct\" href=\"ash/vk/struct.StructureType.html\" title=\"struct ash::vk::StructureType\">StructureType</a> = StructureType::COMMAND_BUFFER_SUBMIT_INFO</h4></section></div></details>","TaggedStructure","ash::vk::aliases::CommandBufferSubmitInfoKHR"],["<section id=\"impl-Copy-for-CommandBufferSubmitInfo%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#38355\">Source</a><a href=\"#impl-Copy-for-CommandBufferSubmitInfo%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"ash/vk/struct.CommandBufferSubmitInfo.html\" title=\"struct ash::vk::CommandBufferSubmitInfo\">CommandBufferSubmitInfo</a>&lt;'a&gt;</h3></section>","Copy","ash::vk::aliases::CommandBufferSubmitInfoKHR"],["<section id=\"impl-Send-for-CommandBufferSubmitInfo%3C'_%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#38365\">Source</a><a href=\"#impl-Send-for-CommandBufferSubmitInfo%3C'_%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"ash/vk/struct.CommandBufferSubmitInfo.html\" title=\"struct ash::vk::CommandBufferSubmitInfo\">CommandBufferSubmitInfo</a>&lt;'_&gt;</h3></section>","Send","ash::vk::aliases::CommandBufferSubmitInfoKHR"],["<section id=\"impl-Sync-for-CommandBufferSubmitInfo%3C'_%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#38366\">Source</a><a href=\"#impl-Sync-for-CommandBufferSubmitInfo%3C'_%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"ash/vk/struct.CommandBufferSubmitInfo.html\" title=\"struct ash::vk::CommandBufferSubmitInfo\">CommandBufferSubmitInfo</a>&lt;'_&gt;</h3></section>","Sync","ash::vk::aliases::CommandBufferSubmitInfoKHR"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[11425]}