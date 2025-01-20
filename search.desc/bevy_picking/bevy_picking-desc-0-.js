searchState.loadedDescShard("bevy_picking", 0, "This crate provides ‘picking’ capabilities for the …\nReads inputs and produces <code>backend::PointerHits</code>s. In the …\nOne plugin that contains the <code>PointerInputPlugin</code>, …\nReads <code>backend::PointerHits</code>s, and updates focus, selection, …\nThis entity will not block entities beneath it, nor will …\nProduces pointer input events. In the <code>First</code> schedule.\nGenerates <code>Pointer</code> events and handles event bubbling.\nRuns after all other picking sets. In the <code>PreUpdate</code> …\nGroups the stages of the picking process under shared …\nAn optional component that overrides default picking …\nThis plugin sets up the core picking infrastructure. It …\nRuns after all the focus systems are done, before event …\nRuns after input events are generated but before commands …\nReceives and processes pointer input events. In the …\nThis module provides a simple interface for implementing a …\nThis module defines a stateful set of interaction events …\nDetermines which entities are being hovered by which …\nWhether or not systems updating entities’ …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates <code>Self</code> using <code>default()</code>.\nCreates <code>Self</code> using <code>default()</code>.\nCreates <code>Self</code> using <code>default()</code>.\nCreates <code>Self</code> using <code>default()</code>.\nThis module provides unsurprising default inputs to …\nWhether or not input collection systems should be running.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nEnables and disables all picking features.\nEnables and disables updating interaction states of …\nIf this is set to <code>false</code> and <code>should_block_lower</code> is set to …\nEnables and disables input collection.\nA mesh ray casting backend for <code>bevy_picking</code>.\nTypes and systems for pointer inputs, such as position and …\nThe picking prelude.\nShould this entity block entities below it from being …\nHolds data from a successful pointer hit test. See …\nAn event produced by a picking backend after it has run …\nThe camera entity used to detect this hit. Useful when you …\n<code>depth</code> only needs to be self-consistent with other …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe normal vector of the hit test, if the data is …\nSet the order of this group of picks. Normally, this is the\nAn unordered collection of entities and their distance …\nThe pointer associated with this hit test.\nThe position of the intersection in the world, if the data …\nThe picking backend prelude.\nTypes and systems for constructing rays from cameras and …\nIdentifies a ray constructed from some (pointer, camera) …\nA map from <code>RayId</code> to <code>Ray3d</code>.\nThe camera whose projection was used to calculate the ray.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates <code>Self</code> using <code>default()</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIterates over all world space rays for every picking …\nThe hash map of all rays cast in the current frame.\nConstruct a <code>RayId</code>.\nThe pointer whose pixel coordinates were used to calculate …\nClears the <code>RayMap</code> and re-populates it with one ray for each\nFires when a pointer is canceled, and it’s current …\nFires when a pointer sends a pointer down event followed …\nFires when a pointer button is pressed over the <code>target</code> …\nFires while the <code>target</code> entity is being dragged.\nFires when a pointer drops the <code>dropped</code> entity onto the …\nFires when a pointer is dragging the <code>target</code> entity and a …\nFires when a pointer dragging the <code>dragged</code> entity enters …\nDragging state.\nFires when a pointer dragging the <code>dragged</code> entity leaves …\nFires while the <code>dragged</code> entity is being dragged over the …\nFires when the <code>target</code> entity receives a pointer down event …\nFires while a pointer is moving over the <code>target</code> entity.\nFires when a the pointer crosses out of the bounds of the …\nFires when a the pointer crosses into the bounds of the …\nA helper system param for accessing the picking event …\nStores the common data needed for all pointer events.\nAn entry in the cache that drives the <code>pointer_events</code> …\nState for all pointers.\nFires when a pointer button is released over the <code>target</code> …\nPointer button pressed to trigger this event.\nPointer button lifted to trigger this event.\nPointer button pressed and lifted to trigger this event.\nPointer button pressed and moved to trigger this event.\nPointer button pressed and moved to trigger this event.\nPointer button pressed, moved, and lifted to trigger this …\nPointer button pressed to enter drag.\nPointer button pressed while dragging over.\nPointer button pressed while leaving drag.\nPointer button lifted to drop.\nClears all the data assoceated with all of the buttons on …\nThe change in position since the last move event.\nThe change in position since the last drag event.\nThe total distance vector of a drag, measured from drag …\nThe vector of drag movement measured from start to final …\nThe entity that was being dragged when the pointer entered …\nThe entity that was being dragged when the pointer was …\nThe entity that was being dragged when the pointer left …\nStores the starting and current locations for each entity …\nStores  the hit data for each entity currently being …\nThe entity that was dropped onto the <code>target</code> entity.\nDuration between the pointer pressed and lifted for this …\nAdditional event-specific data. <code>DragDrop</code> for example, has …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates <code>Self</code> using <code>default()</code>.\nCreates <code>Self</code> using <code>default()</code>.\nRetrieves the current state for a specific pointer and …\nProvides write access to the state of a pointer and …\nInformation about the picking intersection.\nInformation about the picking intersection.\nInformation about the latest prior picking intersection.\nInformation about the picking intersection.\nInformation about the picking intersection.\nInformation about the picking intersection.\nInformation about the picking intersection.\nInformation about the picking intersection.\nInformation about the picking intersection.\nInformation about the picking intersection.\nInformation about the latest prior picking intersection.\nInformation about the picking intersection.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe latest position of the pointer during this drag, used …\nConstruct a new <code>Pointer&lt;E&gt;</code> event.\nPressing and dragging state, organized by pointer and …\nDispatches interaction events to the target entities.\nThe pointer that triggered this event\nThe location of the pointer during this event\nStores the press location and start time for each button …\nThe position of the pointer at drag start.\nThe original target of this picking event, before bubbling\nThe source of truth for all hover state. This is used to …\nThe entity is being hovered by a pointer.\nNo pointers are interacting with this entity.\nA component that aggregates picking interaction state of …\nThe entity is being pressed down by a pointer.\nThe previous state of the hover map, used to track changes …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates <code>Self</code> using <code>default()</code>.\nCreates <code>Self</code> using <code>default()</code>.\nCreates <code>Self</code> using <code>default()</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCoalesces all data from inputs and backends to generate a …\nUses pointer events to update <code>PointerInteraction</code> and …\nAdds mouse and touch inputs for picking pointers to your …\nDeactivates unused touch pointers.\nReturns the argument unchanged.\nCreates <code>Self</code> using <code>default()</code>.\nCalls <code>U::from(self)</code>.\nShould mouse inputs be updated?\nShould touch inputs be updated?\nSends mouse pointer events to be processed by the core …\nThe picking input prelude.\nSpawns the default mouse pointer.\nSends touch pointer events to be consumed by the core …\nAdds the mesh picking backend to your app.\nRuntime settings for the <code>MeshPickingPlugin</code>.\nAn optional component that marks cameras and target …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates <code>Self</code> using <code>default()</code>.\nCreates <code>Self</code> using <code>default()</code>.\nCreates <code>Self</code> using <code>default()</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nRay casting for meshes.\nDetermines how mesh picking should consider <code>Visibility</code>. …\nWhen set to <code>true</code> ray casting will only happen between …\nCasts rays into the scene using <code>MeshPickingSettings</code> and …\nCompletely ignore visibility checks. Hidden items can …\nDetermines whether backfaces should be culled or included …\nCull backfaces.\nInclude backfaces.\nAdd this ray casting <code>SystemParam</code> to your system to cast …\nDisables backface culling for ray casts on this entity.\nSettings for a ray cast.\nHow a ray cast should handle <code>Visibility</code>.\nHit data for an intersection between a ray and a mesh.\nA simplified mesh component that can be used for ray …\nOnly cast rays against entities that are visible in the …\nOnly cast rays against entities that are visible in the …\nThis ray cast should exit as soon as the nearest hit is …\nThe barycentric coordinates of the intersection.\nCasts the <code>ray</code> into the world and returns a sorted list of …\nThe distance from the ray origin to the intersection point.\nA function that is run every time a hit is found. Ray …\nA predicate that is applied for every entity that ray …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates <code>Self</code> using <code>default()</code>.\nCreates <code>Self</code> using <code>default()</code>.\nCreates <code>Self</code> using <code>default()</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThis ray cast should check all entities whose AABB …\nThe normal vector of the triangle at the point of …\nThe point of intersection in world space.\nChecks if the ray intersects with the AABB of a mesh, …\nChecks if a ray intersects a mesh, and returns the nearest …\nThe vertices of the triangle that was hit.\nThe index of the triangle that was hit.\nDetermines how ray casting should consider <code>Visibility</code>.\nSet the early exit test to apply to the ray cast.\nSet the filter to apply to the ray cast.\nSet the <code>RayCastVisibility</code> setting to apply to the ray cast.\nThe pointer has been canceled. The OS can cause this to …\nA custom, uniquely identified pointer. Useful for mocking …\nThe pointer button was just pressed\nThe location of a pointer, including the current …\nThe tertiary pointer button\nThe mouse pointer.\nThe pointer has moved.\nTypes of actions that can be taken by pointers.\nThe button that was just pressed or released\nIdentifies a unique pointer entity. <code>Mouse</code> and <code>Touch</code> …\nAn input event effecting a pointer.\nHolds a list of entities this pointer is currently …\nComponent that tracks a pointer’s current <code>Location</code>.\nA resource that maps each <code>PointerId</code> to their <code>Entity</code> for …\nTracks the state of the pointer’s buttons in response to …\nThe stage of the pointer button press event\nA button has been pressed on the pointer.\nThe primary pointer button\nThe secondary pointer button\nA touch input, usually numbered by window touch events …\nThe pointer button was just released\nThe action that the event describes.\nReturns true if the <code>target_button</code> of this pointer was just …\nReturns true if the <code>target_button</code> of this pointer was just …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates <code>Self</code> using <code>default()</code>.\nCreates <code>Self</code> using <code>default()</code>.\nCreates <code>Self</code> using <code>default()</code>.\nCreates <code>Self</code> using <code>default()</code>.\nCreates <code>Self</code> using <code>default()</code>.\nGet the <code>Entity</code> of the supplied <code>PointerId</code>.\nReturns the nearest hit entity and data about that …\nReturns the touch id if the pointer is a touch input.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if any pointer button is pressed.\nReturns true if the pointer is a custom input.\nReturns <code>true</code> if this pointer’s <code>Location</code> is within the …\nReturns true if the middle (tertiary) pointer button is …\nReturns true if the pointer is the mouse.\nReturns true if the primary pointer button is pressed.\nReturns true if the secondary pointer button is pressed.\nReturns true if the pointer is a touch input.\nIterator over all buttons that a pointer can have.\nReturns <code>Some(&amp;</code><code>Location</code><code>)</code> if the pointer is active, or <code>None</code> …\nThe <code>Location</code> of the pointer. Note that a location is both …\nThe location of the pointer. For [<code>PointerAction::Moved</code>], …\nReturns a <code>PointerLocation</code> associated with the given …\nCreates a new pointer input event.\nThe id of the pointer.\nThe position of the pointer in the <code>target</code>.\nUpdates pointer entities according to the input events.\nThe <code>NormalizedRenderTarget</code> associated with the pointer, …\nUpdate the <code>PointerMap</code> resource with the current frame’s …\nThe button that was pressed.\nHow much the pointer moved from the previous position.\nThe press direction, either down or up.")