(function() {
    var type_impls = Object.fromEntries([["accesskit",[]],["libc",[]],["linux_raw_sys",[]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[16,12,21]}