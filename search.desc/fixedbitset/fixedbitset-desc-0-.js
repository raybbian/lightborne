searchState.loadedDescShard("fixedbitset", 0, "<code>FixedBitSet</code> is a simple fixed size set of bits.\nAn iterator producing elements in the difference of two …\n<code>FixedBitSet</code> is a simple fixed size set of bits that each …\n<strong>IndexRange</strong> is implemented by Rust’s built-in range …\nAn iterator producing elements in the intersection of two …\nAn  iterator producing the indices of the set bit in a set.\nAn iterator producing elements in the symmetric difference …\nAn iterator producing elements in the union of two sets.\nAn  iterator producing the indices of the set bit in a set.\nView the bitset as a mutable slice of <code>Block</code> blocks. …\nView the bitset as a slice of <code>Block</code> blocks\nClear all bits.\nReturn <strong>true</strong> if the bit is enabled in the <strong>FixedBitSet</strong>, <strong>false</strong>…\nChecks if the bitset contains every bit in the given range.\nChecks if the bitset contains at least one set bit in the …\nReturn <strong>true</strong> if the bit is enabled in the <strong>FixedBitSet</strong>, <strong>false</strong>…\nCopies boolean value from specified bit to the specified …\nCopies boolean value from specified bit to the specified …\nCount the number of set bits in the given bit range.\nCount the number of unset bits in the given bit range.\nReturns a lazy iterator over the difference of two …\nComputes how many bits would be set in the difference …\nIn-place difference of two <code>FixedBitSet</code>s.\nEnd index (exclusive)\nEnd index (exclusive)\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGrow capacity to <strong>bits</strong>, all new bits initialized to zero\nGrows the internal size of the bitset before inserting a …\nEnable <code>bit</code>.\nEnables every bit in the given range.\nEnable <code>bit</code> without any length checks.\nIn-place intersection of two <code>FixedBitSet</code>s.\nReturns a lazy iterator over the intersection of two …\nComputes how many bits would be set in the intersection …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIterates over all enabled bits.\n<code>true</code> if all bits in the <code>FixedBitSet</code> are unset.\nReturns <code>true</code> if <code>self</code> has no elements in common with <code>other</code>. …\n<code>true</code> if the <code>FixedBitSet</code> is empty.\n<code>true</code> if all bits in the <code>FixedBitSet</code> are set.\nReturns <code>true</code> if the set is a subset of another, i.e. <code>other</code> …\nReturns <code>true</code> if the set is a superset of another, i.e. <code>self</code>…\nThe length of the <code>FixedBitSet</code> in bits.\nFinds the highest set bit in the bitset.\nFinds the lowest set bit in the bitset.\nCreate a new empty <strong>FixedBitSet</strong>.\nIterates over all enabled bits.\nEnable <code>bit</code>, and return its previous value.\nEnable <code>bit</code>, and return its previous value without doing …\nDisable <code>bit</code>.\nDisables every bit in the given range.\nDisable <code>bit</code> without any bounds checking.\nSets a bit to the provided <code>enabled</code> value.\nSets every bit in the given range to the given state (…\nSets a bit to the provided <code>enabled</code> value without doing any …\nStart index (inclusive)\nStart index (inclusive)\nReturns a lazy iterator over the symmetric difference of …\nComputes how many bits would be set in the symmetric …\nIn-place symmetric difference of two <code>FixedBitSet</code>s.\nToggle <code>bit</code> (inverting its state).\nToggles (inverts) every bit in the given range.\nToggle <code>bit</code> (inverting its state) without any bounds …\nReturns a lazy iterator over the union of two <code>FixedBitSet</code>s.\nComputes how many bits would be set in the union between …\nIn-place union of two <code>FixedBitSet</code>s.\nCreate a new <strong>FixedBitSet</strong> with a specific number of bits, …\nCreate a new <strong>FixedBitSet</strong> with a specific number of bits, …\nIterates over all disabled bits.")