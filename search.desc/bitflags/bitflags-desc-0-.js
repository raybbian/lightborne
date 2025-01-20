searchState.loadedDescShard("bitflags", 0, "Generate types for C-style flags with ergonomic APIs.\nA value with all bits set.\nA bits type that can be used as storage for a flags type.\nThe underlying bits type.\nA value with all bits unset.\nThe set of defined flags.\nA defined flags value that may be named or unnamed.\nA set of defined flags using a bits type as storage.\nGet a flags value with all known bits set.\nGet a flags value with all known bits set.\nGenerate a flags type.\nA macro that matches flags values, similar to Rust’s …\nGet the underlying bits value.\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nWhether all set bits in a source flags value are also set …\nWhether all set bits in a source flags value are also set …\nThis method will return <code>true</code> if any unknown bits are set.\nThis method will return <code>true</code> if any unknown bits are set.\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nGet a flags value with all bits unset.\nGet a flags value with all bits unset.\nReturns the argument unchanged.\nConvert from a bits value.\nConvert from a bits value.\nConvert from a bits value exactly.\nConvert from a bits value, unsetting any unknown bits.\nConvert from a bits value, unsetting any unknown bits.\nGet a flags value with the bits of a flag with the given …\nGet a flags value with the bits of a flag with the given …\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nWhether any set bits in a source flags value are also set …\nWhether any set bits in a source flags value are also set …\nCalls <code>U::from(self)</code>.\nWhether all known bits in this flags value are set.\nWhether all known bits in this flags value are set.\nWhether all bits in this flags value are unset.\nWhether all bits in this flags value are unset.\nWhether the flag is named.\nWhether the flag is unnamed.\nYield the bits of a source flags value in a set of …\nYield a set of contained flags values.\nYield a set of contained flags values.\nYield a set of contained named flags values.\nYield a set of contained named flags values.\nGet the name of this flag.\nDefine a flag.\nParsing flags from text.\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nSpecialized serialization for flags types using <code>serde</code>.\nCall <code>Flags::insert</code> when <code>value</code> is <code>true</code> or <code>Flags::remove</code> …\nCall <code>Flags::insert</code> when <code>value</code> is <code>true</code> or <code>Flags::remove</code> …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nRemove any unknown bits from the flags.\nRemove any unknown bits from the flags.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nGet the flags value of this flag.\nAn iterator over flags values.\nAn iterator over flags values.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nGet a flags value of any remaining bits that haven’t …\nAn error encountered while parsing flags from text.\nParse a value from a hex string.\nEncode a value as a hex string.\nA hex or named flag wasn’t found between separators.\nReturns the argument unchanged.\nParse a flags value from text.\nParse a flags value from text.\nParse a flags value from text.\nCalls <code>U::from(self)</code>.\nAn invalid hex flag was encountered.\nA named flag that doesn’t correspond to any on the flags …\nParse the value from hex.\nWrite a flags value as text.\nWrite only the contained, defined, named flags in a flags …\nWrite a flags value as text, ignoring any unknown bits.\nWrite the value as hex.\nDeserialize a set of flags from a human-readable string or …\nSerialize a set of flags as a human-readable string or …")