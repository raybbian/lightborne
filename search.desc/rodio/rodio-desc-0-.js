searchState.loadedDescShard("rodio", 0, "Audio playback library.\nSee the <code>BackendSpecificError</code> docs for more information …\nAttempting to decode the audio failed.\nThe <code>Device</code> implementation associated with the platform’s …\nA device that is capable of audio input and/or output.\nThe <code>Devices</code> iterator associated with the platform’s …\nAn error that might occur while attempting to enumerate …\nA host’s device iterator yielding only <em>input</em> devices.\nThe output device was lost.\nA host’s device iterator yielding only <em>output</em> devices.\n<code>cpal::Stream</code> container. Also see the more useful …\nMore flexible handle to a <code>OutputStream</code> that provides …\nAn error occurred while attempting to play a sound.\nRepresents a value of a single sample.\nHandle to a device that outputs sounds.\nThe stream type created by <code>build_input_stream_raw</code> and …\nThe iterator type yielding supported input stream formats.\nThe iterator type yielding supported output stream formats.\nDescribes a single supported stream configuration, …\nMultiplies the value of this sample by the given amount.\nAppends a sound to the queue of sounds to play.\nAppends a sound to the queue of sounds to play.\nReturns a reference to the underlying platform specific …\nReturns a reference to the underlying platform specific …\nReturns a mutable reference to the underlying platform …\nReturns a mutable reference to the underlying platform …\nA simple source of samples coming from a buffer.\nCreate an input stream.\nCreate a dynamically typed input stream.\nCreate an output stream.\nCreate a dynamically typed output stream.\nRemoves all currently loaded <code>Source</code>s from the <code>Sink</code>, and …\nRemoves all currently loaded <code>Source</code>s from the <code>SpatialSink</code> …\nDecodes samples from an audio file.\nThe default input stream format for the device.\nThe default output stream format for the device.\nDestroys the sink without stopping the sounds that are …\nDestroys the sink without stopping the sounds that are …\nMixer that plays multiple sounds at the same time.\nReturns true if this sink has no more sounds to play.\nReturns true if this sink has no more sounds to play.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the position of the sound that’s being played.\nReturns the position of the sound that’s being played.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the underlying platform specific implementation of …\nReturns the underlying platform specific implementation of …\nGets if a sink is paused\nGets if a sound is paused\nReturns the number of sounds currently in the queue.\nReturns the number of sounds currently in the queue.\nLinear interpolation between two samples.\nThe human-readable name of the device.\nBuilds a new <code>Sink</code>.\nPauses playback of this sink.\nPauses playback of this sink.\nResumes playback of a paused sink.\nResumes playback of a paused sound.\nPlays a sound once. Returns a <code>Sink</code> that can be used to …\nPlays a source with a device until it ends.\nQueue that plays sounds one after the other.\nCalls <code>saturating_add</code> on the sample.\nSets the position of the sound emitter in 3 dimensional …\nSets the position of the left ear in 3 dimensional space.\nSets the position of the right ear in 3 dimensional space.\nChanges the speed of the sound.\nChanges the speed of the sound.\nChanges the volume of the sound.\nChanges the volume of the sound.\nSkips to the next <code>Source</code> in the <code>Sink</code>\nSleeps the current thread until the sound ends.\nSleeps the current thread until the sound ends.\nSources of sound and various filters.\nGets the speed of the sound.\nGets the speed of the sound.\nA simple source of samples coming from a static buffer.\nStops the sink by emptying the queue.\nStops the sink by emptying the queue.\nAn iterator yielding formats that are supported by the …\nAn iterator yielding output stream formats that are …\nReturn a new stream &amp; handle using the default output …\nReturns a new stream &amp; handle using the given output …\nReturns a new stream &amp; handle using the given device and …\nBuilds a new <code>Sink</code>, beginning playback on a stream.\nBuilds a new <code>SpatialSink</code>.\nAttempts to seek to a given position in the current source.\nAttempts to seek to a given position in the current source.\nGets the volume of the sound.\nThe value <code>1.0</code> is the “normal” volume (unfiltered …\nReturns the value corresponding to the absence of sound.\nA buffer of samples treated as a source.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nBuilds a new <code>SamplesBuffer</code>.\nThis jumps in memory till the sample for <code>pos</code>.\nSource of audio samples from decoding a file.\nError that can happen when creating a decoder.\nThe format of the data has not been recognized.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nBuilds a new decoder.\nBuilds a new decoder from vorbis data.\nThe output of the mixer. Implements <code>Source</code>.\nThe input of the mixer.\nAdds a new source to mix to the existing ones.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nBuilds a new mixer.\nThe input of the queue.\nThe output of the queue. Implements <code>Source</code>.\nAdds a new source to the end of the queue.\nAdds a new source to the end of the queue.\nRemoves all the sounds from the queue. Returns the number …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nBuilds a new queue. It consists of an input and an output.\nSets whether the queue stays alive if there’s no more …\nOnly seeks within the current source.\nFilter that modifies each sample by a given value.\nIterator that at the same time extracts data from the …\nCombines channels in input into a single mono source, then …\nA source that delays the given source by a certain amount.\nWhen the inner source is empty this decrements an …\nAn empty source.\nAn empty source which executes a callback function\nFilter that modifies raises the volume from silence over a …\nInternal type used by <code>from_factory</code>.\nA source that chains sources provided by an iterator.\nFilter that modifies each sample by a given value.\nCalls a function on a source every time a period elapsed.\nA source that repeats the given source.\nAn iterator that reads from a <code>Source</code> and converts the …\nAn infinite source that produces a sine.\nA source that skips specified duration of the given source …\nA source of samples.\nCombines channels in input into a single mono source, then …\nFilter that modifies each sample by a given value.\nA source that truncates the given source to a certain …\nAn iterator that reads from a <code>Source</code> and converts the …\nAn infinite source that produces zero.\nAmplifies the sound by the given value.\nStores the source in a buffer in addition to returning it. …\nReturns the number of channels. Channels are always …\nConverts the samples of this source to another type.\nReturns the number of samples before the current frame …\nDelays the sound by a certain duration.\nFades in the sound.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nBuilds a source that chains sources built from a factory.\nBuilds a source that chains sources provided by an …\nReturns the position of the underlying source relative to …\nApplies a high-pass filter to the source.\nApplies a high-pass filter to the source while allowing …\nReturns a reference to the inner source.\nReturns a reference to the inner source.\nReturns a reference to the inner source.\nReturns a reference to the inner source.\nReturns a reference to the inner source.\nReturns a reference to the inner source.\nReturns a reference to the inner source.\nReturns a reference to the inner source.\nReturns a reference to the inner source.\nReturns a reference to the inner source.\nReturns a reference to the inner source.\nReturns a reference to the inner source.\nReturns a reference to the inner source.\nReturns a reference to the inner source.\nReturns a reference to the inner source.\nReturns a mutable reference to the inner source.\nReturns a mutable reference to the inner source.\nReturns a mutable reference to the inner source.\nReturns a mutable reference to the inner source.\nReturns a mutable reference to the inner source.\nReturns a mutable reference to the inner source.\nReturns a mutable reference to the inner source.\nReturns a mutable reference to the inner source.\nReturns a mutable reference to the inner source.\nReturns a mutable reference to the inner source.\nReturns a mutable reference to the inner source.\nReturns a mutable reference to the inner source.\nReturns a mutable reference to the inner source.\nReturns a mutable reference to the inner source.\nReturns a mutable reference to the inner source.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the inner source.\nReturns the inner source.\nReturns the inner source.\nReturns the inner source.\nReturns the inner source.\nReturns the inner source.\nReturns the inner source.\nReturns the inner source.\nReturns the inner source.\nReturns the inner source.\nReturns the inner source.\nReturns the inner source.\nReturns the inner source.\nReturns the inner source.\nReturns the inner source.\nApplies a low-pass filter to the source. <strong>Warning</strong>: Probably …\nApplies a low-pass filter to the source while allowing the …\nMixes this source with another one.\nThe frequency of the sine.\nMakes the sound pausable.\nCalls the <code>access</code> closure on <code>Self</code> the first time the source …\nRepeats this source forever.\nAdds a basic reverb effect.\nReturns the rate at which the source should be played. In …\nModifies the amplification factor.\nModifies the speed factor.\nSets whether the filter applies.\nSets the position of the emitter and ears in the 3D world.\nSets the volume for a given channel number.  Will panic if …\nSkips the current source\nImmediately skips a certain duration of this source.\nChanges the play speed of the sound. Does not adjust the …\nStops the sound.\nMakes the sound stoppable.\nMixes this sound fading out with another sound fading in …\nTakes a certain duration of this source and then stops.\nModifies this filter so that it becomes a high-pass filter\nSame as to_high_pass but allows the q value (bandwidth) to …\nModifies this filter so that it becomes a low-pass filter.\nSame as to_low_pass but allows the q value (bandwidth) to …\nReturns the total duration of this source, if known.\nStart tracking the elapsed duration since the start of the …\nCan not support seek, in the end state we lose the …\nAttempts to seek to a given position in the current source.\nPos is seen from the perspective of the api user.\nWill only attempt a seek if both underlying sources …\nA buffer of samples treated as a source.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nBuilds a new <code>StaticSamplesBuffer</code>.")