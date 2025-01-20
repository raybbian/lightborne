searchState.loadedDescShard("taffy", 0, "Taffy\nType representing an iterator of the children of a node\nAny type that implements <code>LayoutPartialTree</code> can be laid out …\nTrait used by the <code>print_tree</code> method which prints a debug …\nTrait used by the <code>round_layout</code> method which takes a tree …\nA typed representation of the CSS style information for a …\nAn entire tree of UI nodes. The entry point to Taffy’s …\nThis trait is Taffy’s abstraction for downward tree …\nA marker trait which extends <code>TraversePartialTree</code> with the …\nHow should content contained within this item be aligned …\nHow this node’s children aligned in the cross/block axis?\nHow this node should be aligned in the cross/block axis …\nSets the preferred aspect ratio for the item\nHow large should the border be on each side?\nGet the number of children for the given node\nGet the list of children IDs for the given node\nLow-level access to the layout algorithms themselves. For …\nComputes the layout of <code>LayoutPartialTree</code> according to the …\nAttempts to find a cached layout for the specified node …\nCompute the specified node’s size or full layout given …\nComputes the layout of <code>LayoutPartialTree</code> according to the …\nGrid layout algorithm This consists of a few phases:\nCreates a layout for this node and its children, …\nCompute the size of a leaf node (node with no children)\nCompute layout for the root node in the tree\nWhat layout strategy should be used?\nSets the initial main axis size of the item\nWhich direction does the main axis flow in?\nThe relative rate at which this item grows when it is …\nThe relative rate at which this item shrinks when it is …\nShould elements wrap, or stay in a single line?\nReturns the argument unchanged.\nHow large should the gaps between items in a grid or flex …\nGeometric primitives useful for layout\nGet a mutable reference to the <code>Cache</code> for this node.\nGet a specific child of a node, where the index represents …\nGet a debug label for the node (typically the type of …\nGet a reference to the node’s final layout\nGet a reference to the <code>Style</code> for this node.\nGet the node’s unrounded layout\nDefined the size of implicitly created columns\nControls how items get placed into the grid for …\nDefines the size of implicitly created rows\nDefines which column in the grid the item should start and …\nDefines which row in the grid the item should start and …\nDefines the track sizing functions (heights) of the grid …\nDefines the track sizing functions (widths) of the grid …\nHow should the position of this element be tweaked …\nCalls <code>U::from(self)</code>.\nHow should contained within this item be aligned in the …\nHow this node’s children should be aligned in the inline …\nHow this node should be aligned in the inline axis Falls …\nHow large should the margin be on each side?\nControls the maximum size of the item\nControls the minimum size of the item\nHow children overflowing their container should affect …\nHow large should the padding be on each side?\nWhat should the <code>position</code> value of this struct use as a …\nCommonly used types\nPrints a debug representation of the computed layout for a …\nRounds the calculated layout to exact pixel values\nHow much space (in points) should be reserved for the …\nGet a reference to the node’s final layout\nSet the node’s unrounded layout\nSets the initial size of the item\nA typed representation of CSS style properties in Rust. …\nHelper functions which it make it easier to create …\nContains both a high-level interface to Taffy using a …\nHelpful misc. utilities such as a function to debug print …\nComputes the layout of <code>LayoutPartialTree</code> according to the …\nAttempts to find a cached layout for the specified node …\nComputes the layout of <code>LayoutPartialTree</code> according to the …\nGrid layout algorithm This consists of a few phases:\nCreates a layout for this node and its children, …\nCompute the size of a leaf node (node with no children)\nCompute layout for the root node in the tree\nRounds the calculated layout to exact pixel values\nThe simple absolute horizontal and vertical axis\nThe CSS abstract axis …\nThe axis in the block dimension, i.e. the vertical axis in …\nA <code>Line&lt;bool&gt;</code> with both start and end set to <code>false</code>\nThe horizontal axis\nThe axis in the inline dimension, i.e. the horizontal axis …\nAn abstract “line”. Represents any type that has a …\nGeneric struct which holds a “min” value and a “max…\nA <code>Size</code> with <code>None</code> width and height\nA <code>Point</code> with values (None, None)\nA 2-dimensional coordinate.\nAn axis-aligned UI rectangle\nThe width and height of a <code>Rect</code>\nA <code>Line&lt;bool&gt;</code> with both start and end set to <code>true</code>\nThe vertical axis\nCreates a new Rect with <code>0.0</code> as all parameters\nA <code>Size</code> with zero width and height\nA <code>Point</code> with values (0,0), representing the origin\nConvert an <code>AbstractAxis</code> into an <code>AbsoluteAxis</code> naively …\nReturns a Rect where the left, right, top, and bottom …\nReturns a Line where both the start and end values are the …\nReturns a Size where both the width and height values are …\nReturns a Point where both the x and y values are the auto …\nReturn true if both components are Some, else false.\nThis can represent either the y-coordinate of the bottom …\nThe end position of a line\nApplies f32_max to each component separately\nApplies f32_min to each component separately\nReturns a Rect where the left, right, top and bottom …\nReturns a Line with start and end set to the same …\nReturns a Size where with width and height set to the same …\nReturns a Point with x and y set to the same …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a new <code>Size&lt;Option&lt;f32&gt;&gt;</code> with either the width or …\nCreate a new Rect with <code>Dimension::Length</code>\nGenerates a <code>Size&lt;Dimension&gt;</code> using <code>Dimension::Length</code> values\nCreate a new Rect with <code>Dimension::Percent</code>\nGenerates a <code>Size&lt;Dimension&gt;</code> using <code>Dimension::Percent</code> values\nGets the extent of the specified layout axis Whether this …\nGet either the width or height depending on the …\nGet either the width or height depending on the …\nDetermine whether at least one of the components (“min”…\nReturn true if both width and height are greater than 0 …\nThe y extent of the rectangle\nReturns a <code>Line&lt;T&gt;</code> representing the left and right …\nResolves the span for an indefinite placement (a placement …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConvert <code>Size&lt;AvailableSpace&gt;</code> into <code>Size&lt;Option&lt;f32&gt;&gt;</code>\nApply a mapping function if the <code>GridPlacement</code> is a <code>Track</code>. …\nWhether the track position is definite in this axis (or …\nWhether the track position is definite in this axis (or …\nThis can represent either the x-coordinate of the starting …\nReturns a Rect where the left, right, top and bottom …\nReturns a Line where both the start and end values are the …\nReturns a Size where both the width and height values the …\nReturns a Point where x and y values are the same given …\nApplies the function <code>f</code> to the left, right, top, and bottom …\nApplies the function <code>f</code> to both the width and height\nApplies the function <code>f</code> to both the width and height\nApplies the function <code>f</code> to both the x and y\nApplies the function <code>f</code> to the height\nApplies the function <code>f</code> to the width\nThe value representing the maximum\nReturns a Rect where the left, right, top, and bottom …\nReturns a Line where both the start and end values are the …\nReturns a Size where both the width and height values are …\nReturns a Point where both the x and y values are the …\nExtract the max track sizing function\nApplies aspect_ratio (if one is supplied) to the Size:\nConverts any <code>parent</code>-relative values for size into an …\nIf passed value is Some then return …\nThe value representing the minimum\nReturns a Rect where the left, right, top, and bottom …\nReturns a Line where both the start and end values are the …\nReturns a Size where both the width and height values are …\nReturns a Point where both the x and y values are the …\nExtract the min track sizing function\nCreates a new Rect\nA <code>Size&lt;Option&lt;f32&gt;&gt;</code> with <code>Some(width)</code> and <code>Some(height)</code> as …\nPerforms Option::or on each component separately\nReturns the other variant of the enum\nReturns the other variant of the enum\nReturns a Rect where the left, right, top and bottom …\nReturns a Line where both the start and end values are the …\nReturns a Size where both the width and height values are …\nReturns a Point where both the x and y values are the …\nFor absolutely positioned items:\nIf at least one of the of the start and end positions is a …\nIf neither of the start and end positions is a track index …\nConverts any <code>parent</code>-relative values for Rect into an …\nConverts any <code>parent</code>-relative values for Rect into an …\nConverts any <code>parent</code>-relative values for size into an …\nThis can represent either the x-coordinate of the ending …\nSets the extent of the specified layout axis Whether this …\nThe start position of a line\nAdds the start and end values together and returns the …\nThis can represent either the y-coordinate of the top edge,\nSwap x and y components\nPerforms Option::unwrap_or on each component separately\nReturns a <code>Line&lt;T&gt;</code> containing the top and bottom properties …\nThe x extent of the rectangle\nThe x-coordinate\nThe y-coordinate\nReturns a Rect where the left, right, top, and bottom …\nReturns a Line where both the start and end values are the …\nReturns a Size where both the width and height values are …\nReturns a Point where both the x and y values are the zero …\nApplies the function <code>f</code> to both the width and height of …\nThe offset is computed relative to this item’s closest …\nSets the distribution of space between and around content …\nUsed to control how child nodes are aligned. For Flexbox …\nUsed to control how the specified nodes is aligned. …\nThe dimension should be automatically computed\nThe dimension should be automatically computed\nTrack maximum size should be automatically sized\nTrack minimum size should be automatically sized\nAuto-repeating tracks should be generated to fit the …\nAuto-repeating tracks should be generated to fit the …\nThe amount of space available to a node in a given axis …\nItems are aligned such as their baselines align\nItems are aligned such as their baselines align\nItems are aligned such as their baselines align\nItems are aligned such as their baselines align\nThe children will follow the block layout algorithm\nItems are packed along the center of the cross axis\nItems are packed along the center of the cross axis\nItems are packed along the center of the cross axis\nItems are centered around the middle of the axis\nItems are packed along the center of the cross axis\nItems are centered around the middle of the axis\nThe automatic minimum size of this node as a flexbox/grid …\nDefines +y as the main axis\nItems are placed by filling each column in turn, adding …\nCombines <code>Column</code> with the dense packing algorithm.\nDefines -y as the main axis\nThe specified tracks should be repeated exacts N times\nThe default of Display.\nThe <code>Default</code> layout, in a form that can be used in const …\nThe amount of space available is the specified number of …\nA unit of linear measurement\nSets the layout used for the children of this node\nItems are packed toward the end of the axis\nItems are packed toward the end of the axis\nItems are packed toward the end of the axis\nItems are packed toward the end of the axis\nItems are packed toward the end of the axis\nItems are packed toward the end of the axis\nTrack maximum size should be sized according to the …\nTrack maximum size should be a fixed length or percentage …\nTrack minimum size should be a fixed length or percentage …\nThe children will follow the flexbox layout algorithm\nThe direction of the flexbox layout main axis.\nItems are packed towards the flex-relative end of the axis.\nItems are packed towards the flex-relative end of the axis.\nItems are packed towards the flex-relative end of the axis.\nItems are packed towards the flex-relative end of the axis.\nItems are packed towards the flex-relative end of the axis.\nItems are packed towards the flex-relative end of the axis.\nItems are packed towards the flex-relative start of the …\nItems are packed towards the flex-relative start of the …\nItems are packed towards the flex-relative start of the …\nItems are packed towards the flex-relative start of the …\nItems are packed towards the flex-relative start of the …\nItems are packed towards the flex-relative start of the …\nControls whether flex items are forced onto one line or …\nThe dimension as a fraction of the total available grid …\nThe children will follow the CSS Grid layout algorithm\nControls whether grid items are placed row-wise or …\nA grid line placement specification. Used for grid-[…\nThe first argument to a repeated track definition. This …\nThe automatic minimum size of this node as a flexbox/grid …\nSets the distribution of space between and around content …\nUsed to control how child nodes are aligned. Does not …\nUsed to control how the specified nodes is aligned. …\nAn absolute length in some abstract units. Users of Taffy …\nAn absolute length in some abstract units. Users of Taffy …\nAn absolute length in some abstract units. Users of Taffy …\nA unit of linear measurement\nA unit of linear measurement\nThe amount of space available is indefinite and the node …\nTrack maximum size should be content sized under a …\nTrack minimum size should be content sized under a …\nMaximum track sizing function\nThe amount of space available is indefinite and the node …\nTrack maximum size should be content sized under a …\nTrack minimum size should be content sized under a …\nMinimum track sizing function\nItems will not wrap and stay on a single line\nThe sizing function for a grid track (row/column) (either …\nThe children will not be laid out, and will follow …\nHow children overflowing their container should affect …\nThe dimension is stored in percentage relative to the …\nThe dimension is stored in percentage relative to the …\nThe dimension is stored in percentage relative to the …\nThe positioning strategy for this item.\nThe offset is computed relative to the final position …\nAutomatically generate grid tracks to fit the available …\nDefines +x as the main axis\nItems are placed by filling each row in turn, adding new …\nCombines <code>Row</code> with the dense packing algorithm.\nDefines -x as the main axis\nThe automatic minimum size of this node as a flexbox/grid …\nA single non-repeated track\nThe gap between the first and last items is exactly HALF …\nThe gap between the first and last items is exactly HALF …\nThe first and last items are aligned flush with the edges …\nThe first and last items are aligned flush with the edges …\nThe gap between the first and last items is exactly THE …\nThe gap between the first and last items is exactly THE …\nItems are packed toward the start of the axis\nItems are packed toward the start of the axis\nItems are packed toward the start of the axis\nItems are packed toward the start of the axis\nItems are packed toward the start of the axis\nItems are packed toward the start of the axis\nStretch to fill the container\nStretch to fill the container\nStretch to fill the container\nItems are stretched to fill the container\nStretch to fill the container\nItems are stretched to fill the container\nA typed representation of the CSS style information for a …\nThe sizing function for a grid track (row/column) See …\nThe automatic minimum size of this node as a flexbox/grid …\nItems will wrap according to this item’s <code>FlexDirection</code>\nItems will wrap in the opposite direction to this item’s …\nHow should content contained within this item be aligned …\nHow this node’s children aligned in the cross/block axis?\nHow this node should be aligned in the cross/block axis …\nSets the preferred aspect ratio for the item\nHow large should the border be on each side?\nCompute free_space given the passed used_space\nResolve the maximum size of the track as defined by either:\nReturns fixed point values directly. Attempts to resolve …\nReturns fixed point values directly. Attempts to resolve …\nWhat layout strategy should be used?\nSets the initial main axis size of the item\nWhich direction does the main axis flow in?\nThe relative rate at which this item grows when it is …\nThe relative rate at which this item shrinks when it is …\nShould elements wrap, or stay in a single line?\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nHow large should the gaps between items in a grid or flex …\nDefined the size of implicitly created columns\nControls how items get placed into the grid for …\nDefines the size of implicitly created rows\nDefines which column in the grid the item should start and …\nDefines which row in the grid the item should start and …\nDefines the track sizing functions (heights) of the grid …\nDefines the track sizing functions (widths) of the grid …\nDetermine whether at least one of the components (“min”…\nHow should the position of this element be tweaked …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nGet Length value if value is Length variant\nConvert to Option Definite values become Some(value). …\nApply a mapping function if the [<code>GridPlacement</code>] is a <code>Track</code>…\nReturns true if value is LengthPercentageAuto::Auto\nWhether the track definition is a auto-repeated fragment\nReturns true for definite values, else false\nWhether grid auto placement uses the sparse placement …\nReturns true if the max track sizing function is <code>Flex</code>, …\nReturns true if the max track sizing function is <code>MinContent</code>…\nReturns true if the min track sizing function is <code>MinContent</code>…\nReturns true if the max track sizing function is <code>MaxContent</code>…\nCompare equality with another AvailableSpace, treating …\nHow should contained within this item be aligned in the …\nHow this node’s children should be aligned in the inline …\nHow this node should be aligned in the inline axis Falls …\nIf passed value is Some then return …\nHow large should the margin be on each side?\nThe value representing the maximum\nControls the maximum size of the item\nExtract the max track sizing function\nConverts the given <code>LengthPercentage</code> into an absolute length\nConverts the given MaybeResolve value into an absolute …\nConverts the given <code>LengthPercentageAuto</code> into an absolute …\nConverts the given MaybeResolve value into an absolute …\nConverts the given MaybeResolve value into an absolute …\nConverts the given <code>Dimension</code> into an absolute length\nIf passed value is Some then return …\nThe value representing the minimum\nControls the minimum size of the item\nExtract the min track sizing function\nReturn self if definite or a default value\nReturn self if definite or a the result of the default …\nHow children overflowing their container should affect …\nHow large should the padding be on each side?\nWhat should the <code>position</code> value of this struct use as a …\nWhether grid auto placement fills areas row-wise or …\nWill return a default value of result is evaluated to <code>None</code>\nWill return a default value of result is evaluated to <code>None</code>\nWill return a default value of result is evaluated to <code>None</code>\nReturns:\nResolve percentage values against the passed parent_size, …\nResolve percentage values against the passed parent_size, …\nHow much space (in points) should be reserved for the …\nSets the initial size of the item\nReturn the definite value. Panic is the value is not …\nReturn the definite value or a default value\nReturn the definite value or the result of the default …\nWhether the track sizing functions depends on the size of …\nWhether the track sizing functions depends on the size of …\nThe auto value for type implementing TaffyAuto\nTrait to create constant percent values from plain numbers\nTrait to create absolute length values from plain numbers\nTrait to create constant percent values from plain numbers\nThe max_content value for type implementing TaffyZero\nThe min_content value for type implementing TaffyZero\nTrait to abstract over auto values\nTrait to create <code>fit-content(…)</code> values from plain numbers\nTrait to abstract over grid line values\nTrait to abstract over grid span values\nTrait to abstract over max_content values\nTrait to abstract over min_content values\nTrait to abstract over zero values\nThe zero value for type implementing TaffyZero\nReturns the auto value for that type\nReturns a grid template containing <code>count</code> evenly sized …\nReturns a value of the inferred type which represent a …\nConverts a LengthPercentage into Self\nShorthand for minmax(0, Nfr). Probably what you want if …\nCreate a <code>Fraction</code> track sizing function (<code>fr</code> in CSS)\nConverts into an <code>Into&lt;f32&gt;</code> into Self\nConverts into an <code>Into&lt;f32&gt;</code> into Self\nConverts an i16 into Self\nConverts into an <code>Into&lt;f32&gt;</code> into Self\nConverts an iu6 into Self\nReturns a value of the inferred type which represent an …\nSpecifies a grid line to place a grid item between in CSS …\nReturns the auto value for that type\nReturns the auto value for that type\nReturns a MinMax with min value of min and max value of max\nReturns a value of the inferred type which represent a …\nReturns an auto-repeated track definition\nReturns a GridPlacement::Span\nReturns the zero value for that type\nBoth axes\nA cache for caching the results of a sizing a Grid Item or …\nThe parent node does not have a child at <code>child_index</code>. It …\nA set of margins that are available for collapsing with …\nThe layout algorithm should be executed such that an …\nOnly content contributions should be taken into account\nContains the error value\nA LayoutInput that can be used to request hidden layout\nAn all-zero <code>LayoutOutput</code> for hidden nodes\nThe horizontal axis\nInherent size styles should be taken into account in …\nThe child node was not found in the <code>TaffyTree</code> instance.\nThe supplied node was not found in the <code>TaffyTree</code> instance.\nThe parent node was not found in the <code>TaffyTree</code> instance.\nThe final result of a layout algorithm for a single node.\nA struct containing the inputs constraints/hints for …\nA struct containing the result of laying a single node, …\nA type representing the id of a single node in a tree of …\nContains the success value\nThis node should have a null layout set as it has been …\nA full layout for this node and all children should be …\nAn axis that layout algorithms can be requested to compute …\nWhether we are performing a full layout, or we merely need …\nWhether styles should be taken into account when computing …\nAn error that occurs while trying to access or modify a …\nThe error Taffy generates on invalid operations\nAn entire tree of UI nodes. The entry point to Taffy’s …\nThe vertical axis\nA default margin set with no collapsible margins\nAdds a <code>child</code> node under the supplied <code>parent</code>\nAvailable space represents an amount of space to layout …\nWhich axis we need the size of\nThe size of the borders of the node\nBottom margin that can be collapsed with. This is used for …\nReturns the child node of the parent <code>node</code> at the provided …\nReturns a list of children that belong to the parent node\nClear all cache entries\nDrops all nodes in the tree\nCollapse a single margin with this set\nCollapse another margin set with this set\nUpdates the stored layout of the provided <code>node</code> and its …\nUpdates the stored layout of the provided <code>node</code> and its …\nThe size of the content within the node\nThe width and height of the content inside the node. This …\nIndicates whether the layout of this node (and its …\nDisable rounding of layout values. Rounding is enabled by …\nEnable rounding of layout values. Rounding is enabled by …\nThe first baseline of the node in each dimension, if any\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate a set from a single margin\nConstruct a SizeBaselinesAndMargins from just the container…\nConstruct a SizeBaselinesAndMargins from just the …\nConstructor to create a <code>LayoutOutput</code> from just the size …\nTry to retrieve a cached result from the cache\nGets mutable references to the the context data associated …\nGets a reference to the the context data associated with …\nGets a mutable reference to the the context data …\nInserts a <code>child</code> node at the given <code>child_index</code> under the …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if all cache entries are None, else false\nKnown dimensions represent dimensions (width/height) which …\nReturn this node layout relative to its parent\nThe top-left corner of the node\nWhether margins can be collapsed through this node. This …\nMarks the layout computation of this node and its children …\nCreate a new empty cache\nCreates a new <code>TaffyTree</code>\nCreates a new zero-<code>Layout</code>.\nCreate a new NodeId from a u64 value\nCreates and adds a new unattached leaf node to the tree, …\nCreates and adds a new unattached leaf node to the tree, …\nCreates and adds a new node, which may have any number of …\nThe relative ordering of the node\nThe size of the padding of the node\nReturns the <code>NodeId</code> of the parent node of the specified …\nParent size dimensions are intended to be used for …\nPrints a debug representation of the tree’s layout\nRemove a specific node from the tree and drop it\nRemoves the <code>child</code> of the parent <code>node</code>\nRemoves the child at the given <code>index</code> from the <code>parent</code>\nReplaces the child at the given <code>child_index</code> from the <code>parent</code>…\nResolve the resultant margin from this set once all …\nWhether we only need to know the Node’s size, or whe\nReturn the scroll width of the node. The scroll width is …\nReturn the scroll width of the node. The scroll width is …\nThe size of the scrollbars in each dimension. If there is …\nDirectly sets the <code>children</code> of the supplied <code>parent</code>\nSets the context data associated with the node\nSets the <code>Style</code> of the provided <code>node</code>\nThe size of the node\nThe width and height of the node\nWhether a Node’s style sizes should be taken into …\nStore a computed size in the cache\nGets the <code>Style</code> of the provided <code>node</code>\nTop margin that can be collapsed with. This is used for …\nReturns the total number of nodes in the tree\nThe abstractions that make up the core of Taffy’s …\nSpecific to CSS Block layout. Used for correctly computing …\nCreates a new <code>TaffyTree</code> that can store <code>capacity</code> nodes …\nCreates a new zero-<code>Layout</code> with the supplied <code>order</code> value.\nThe total number of children the parent has\nThe index that was looked up\nThe parent node whose child was being looked up\nType representing an iterator of the children of a node\nAny type that implements <code>LayoutPartialTree</code> can be laid out …\nTrait used by the <code>print_tree</code> method which prints a debug …\nTrait used by the <code>round_layout</code> method which takes a tree …\nThis trait is Taffy’s abstraction for downward tree …\nA marker trait which extends <code>TraversePartialTree</code> with the …\nGet the number of children for the given node\nGet the list of children IDs for the given node\nCompute the specified node’s size or full layout given …\nGet a mutable reference to the <code>Cache</code> for this node.\nGet a specific child of a node, where the index represents …\nGet a debug label for the node (typically the type of …\nGet a reference to the node’s final layout\nGet a reference to the <code>Style</code> for this node.\nGet the node’s unrounded layout\nGet a reference to the node’s final layout\nSet the node’s unrounded layout\nA trait to conveniently calculate minimums and maximums …\nTrait to encapsulate behaviour where we need to resolve …\nTrait to encapsulate behaviour where we need to resolve …\nAdds <code>self</code> and <code>rhs</code>.\nReturns <code>self</code> clamped between <code>min</code> and <code>max</code>\nReturns the maximum of <code>self</code> and <code>rhs</code>\nReturns the minimum of <code>self</code> and <code>rhs</code>\nResolve a dimension that might be dependent on a context, …\nSubtracts rhs from <code>self</code>, treating <code>None</code> values as default\nPrints a debug representation of the computed layout for a …\nResolve a dimension that might be dependent on a context, …")