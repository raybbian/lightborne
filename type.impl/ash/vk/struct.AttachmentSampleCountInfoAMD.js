(function() {
    var type_impls = Object.fromEntries([["ash",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AttachmentSampleCountInfoAMD%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#47865-47883\">Source</a><a href=\"#impl-AttachmentSampleCountInfoAMD%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"struct\" href=\"ash/vk/struct.AttachmentSampleCountInfoAMD.html\" title=\"struct ash::vk::AttachmentSampleCountInfoAMD\">AttachmentSampleCountInfoAMD</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.color_attachment_samples\" class=\"method\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#47867-47874\">Source</a><h4 class=\"code-header\">pub fn <a href=\"ash/vk/struct.AttachmentSampleCountInfoAMD.html#tymethod.color_attachment_samples\" class=\"fn\">color_attachment_samples</a>(\n    self,\n    color_attachment_samples: &amp;'a [<a class=\"struct\" href=\"ash/vk/struct.SampleCountFlags.html\" title=\"struct ash::vk::SampleCountFlags\">SampleCountFlags</a>],\n) -&gt; Self</h4></section><section id=\"method.depth_stencil_attachment_samples\" class=\"method\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#47876-47882\">Source</a><h4 class=\"code-header\">pub fn <a href=\"ash/vk/struct.AttachmentSampleCountInfoAMD.html#tymethod.depth_stencil_attachment_samples\" class=\"fn\">depth_stencil_attachment_samples</a>(\n    self,\n    depth_stencil_attachment_samples: <a class=\"struct\" href=\"ash/vk/struct.SampleCountFlags.html\" title=\"struct ash::vk::SampleCountFlags\">SampleCountFlags</a>,\n) -&gt; Self</h4></section></div></details>",0,"ash::vk::aliases::AttachmentSampleCountInfoNV"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-AttachmentSampleCountInfoAMD%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#47834\">Source</a><a href=\"#impl-Clone-for-AttachmentSampleCountInfoAMD%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"ash/vk/struct.AttachmentSampleCountInfoAMD.html\" title=\"struct ash::vk::AttachmentSampleCountInfoAMD\">AttachmentSampleCountInfoAMD</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#47834\">Source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"ash/vk/struct.AttachmentSampleCountInfoAMD.html\" title=\"struct ash::vk::AttachmentSampleCountInfoAMD\">AttachmentSampleCountInfoAMD</a>&lt;'a&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.84.0/src/core/clone.rs.html#174\">Source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","ash::vk::aliases::AttachmentSampleCountInfoNV"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-AttachmentSampleCountInfoAMD%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#47833\">Source</a><a href=\"#impl-Debug-for-AttachmentSampleCountInfoAMD%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"ash/vk/struct.AttachmentSampleCountInfoAMD.html\" title=\"struct ash::vk::AttachmentSampleCountInfoAMD\">AttachmentSampleCountInfoAMD</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#47833\">Source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","ash::vk::aliases::AttachmentSampleCountInfoNV"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-AttachmentSampleCountInfoAMD%3C'_%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#47847-47859\">Source</a><a href=\"#impl-Default-for-AttachmentSampleCountInfoAMD%3C'_%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"ash/vk/struct.AttachmentSampleCountInfoAMD.html\" title=\"struct ash::vk::AttachmentSampleCountInfoAMD\">AttachmentSampleCountInfoAMD</a>&lt;'_&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#47849-47858\">Source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; Self</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.84.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","ash::vk::aliases::AttachmentSampleCountInfoNV"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TaggedStructure-for-AttachmentSampleCountInfoAMD%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#47860-47862\">Source</a><a href=\"#impl-TaggedStructure-for-AttachmentSampleCountInfoAMD%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"ash/vk/trait.TaggedStructure.html\" title=\"trait ash::vk::TaggedStructure\">TaggedStructure</a> for <a class=\"struct\" href=\"ash/vk/struct.AttachmentSampleCountInfoAMD.html\" title=\"struct ash::vk::AttachmentSampleCountInfoAMD\">AttachmentSampleCountInfoAMD</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"associatedconstant.STRUCTURE_TYPE\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#47861\">Source</a><a href=\"#associatedconstant.STRUCTURE_TYPE\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"ash/vk/trait.TaggedStructure.html#associatedconstant.STRUCTURE_TYPE\" class=\"constant\">STRUCTURE_TYPE</a>: <a class=\"struct\" href=\"ash/vk/struct.StructureType.html\" title=\"struct ash::vk::StructureType\">StructureType</a> = StructureType::ATTACHMENT_SAMPLE_COUNT_INFO_AMD</h4></section></div></details>","TaggedStructure","ash::vk::aliases::AttachmentSampleCountInfoNV"],["<section id=\"impl-Copy-for-AttachmentSampleCountInfoAMD%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#47834\">Source</a><a href=\"#impl-Copy-for-AttachmentSampleCountInfoAMD%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"ash/vk/struct.AttachmentSampleCountInfoAMD.html\" title=\"struct ash::vk::AttachmentSampleCountInfoAMD\">AttachmentSampleCountInfoAMD</a>&lt;'a&gt;</h3></section>","Copy","ash::vk::aliases::AttachmentSampleCountInfoNV"],["<section id=\"impl-ExtendsCommandBufferInheritanceInfo-for-AttachmentSampleCountInfoAMD%3C'_%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#47863\">Source</a><a href=\"#impl-ExtendsCommandBufferInheritanceInfo-for-AttachmentSampleCountInfoAMD%3C'_%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"ash/vk/trait.ExtendsCommandBufferInheritanceInfo.html\" title=\"trait ash::vk::ExtendsCommandBufferInheritanceInfo\">ExtendsCommandBufferInheritanceInfo</a> for <a class=\"struct\" href=\"ash/vk/struct.AttachmentSampleCountInfoAMD.html\" title=\"struct ash::vk::AttachmentSampleCountInfoAMD\">AttachmentSampleCountInfoAMD</a>&lt;'_&gt;</h3></section>","ExtendsCommandBufferInheritanceInfo","ash::vk::aliases::AttachmentSampleCountInfoNV"],["<section id=\"impl-ExtendsGraphicsPipelineCreateInfo-for-AttachmentSampleCountInfoAMD%3C'_%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#47864\">Source</a><a href=\"#impl-ExtendsGraphicsPipelineCreateInfo-for-AttachmentSampleCountInfoAMD%3C'_%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"ash/vk/trait.ExtendsGraphicsPipelineCreateInfo.html\" title=\"trait ash::vk::ExtendsGraphicsPipelineCreateInfo\">ExtendsGraphicsPipelineCreateInfo</a> for <a class=\"struct\" href=\"ash/vk/struct.AttachmentSampleCountInfoAMD.html\" title=\"struct ash::vk::AttachmentSampleCountInfoAMD\">AttachmentSampleCountInfoAMD</a>&lt;'_&gt;</h3></section>","ExtendsGraphicsPipelineCreateInfo","ash::vk::aliases::AttachmentSampleCountInfoNV"],["<section id=\"impl-Send-for-AttachmentSampleCountInfoAMD%3C'_%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#47845\">Source</a><a href=\"#impl-Send-for-AttachmentSampleCountInfoAMD%3C'_%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"ash/vk/struct.AttachmentSampleCountInfoAMD.html\" title=\"struct ash::vk::AttachmentSampleCountInfoAMD\">AttachmentSampleCountInfoAMD</a>&lt;'_&gt;</h3></section>","Send","ash::vk::aliases::AttachmentSampleCountInfoNV"],["<section id=\"impl-Sync-for-AttachmentSampleCountInfoAMD%3C'_%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ash/vk/definitions.rs.html#47846\">Source</a><a href=\"#impl-Sync-for-AttachmentSampleCountInfoAMD%3C'_%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"ash/vk/struct.AttachmentSampleCountInfoAMD.html\" title=\"struct ash::vk::AttachmentSampleCountInfoAMD\">AttachmentSampleCountInfoAMD</a>&lt;'_&gt;</h3></section>","Sync","ash::vk::aliases::AttachmentSampleCountInfoNV"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[12220]}