NDSummary.OnToolTipsLoaded("CClass:DataSweep",{5711:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5711\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">DataSweep</div></div></div><div class=\"TTSummary\">Represents 1 data sweep, including data for each channel, a timestamp, and a sample rate</div></div>",5725:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5725\" class=\"NDPrototype NoParameterForm\">DataSweep()</div><div class=\"TTSummary\">Creates a default constructed DataSweep.</div></div>",5727:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5727\" class=\"NDPrototype NoParameterForm\">Timestamp m_timestamp</div><div class=\"TTSummary\">The Timestamp of the data sweep.</div></div>",5728:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5728\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_tick</div><div class=\"TTSummary\">The tick value that was contained in the packet (increments for each sweep)</div></div>",5729:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5729\" class=\"NDPrototype NoParameterForm\">SampleRate m_sampleRate</div><div class=\"TTSummary\">The SampleRate that was contained in the packet</div></div>",5730:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5730\" class=\"NDPrototype NoParameterForm\">NodeAddress m_nodeAddress</div><div class=\"TTSummary\">The node address that was contained in the packet (identifies the node this packet came from)</div></div>",5731:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5731\" class=\"NDPrototype NoParameterForm\">ChannelData m_data</div><div class=\"TTSummary\">Contains one or more WirelessDataPoints, corresponding to each channel\'s data for this sweep</div></div>",5732:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5732\" class=\"NDPrototype NoParameterForm\">SamplingType m_samplingMode</div><div class=\"TTSummary\">The SamplingType that identifies the sampling mode for this data sweep</div></div>",5733:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5733\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> m_baseRssi</div><div class=\"TTSummary\">The Base Station RSSI that identifies the received signal strength at the Base Station</div></div>",5734:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5734\" class=\"NDPrototype NoParameterForm\">WirelessTypes::Frequency m_frequency</div><div class=\"TTSummary\">The WirelessTypes::Frequency representing the radio frequency that this DataSweep was collected on</div></div>",5735:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5735\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_calsApplied</div><div class=\"TTSummary\">Whether calibration coefficients have been applied to the data or not.</div></div>",5737:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5737\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Timestamp&amp; timestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the timestamp of the sweep as a Timestamp</div></div>",5738:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5738\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> tick() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the tick value of the sweep</div></div>",5739:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5739\" class=\"NDPrototype NoParameterForm\">SampleRate sampleRate() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the sample rate of the sweep as a SampleRate</div></div>",5740:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5740\" class=\"NDPrototype NoParameterForm\">NodeAddress nodeAddress() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node address that this sweep is associated with</div></div>",5741:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5741\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> ChannelData&amp; data() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the channel data in this sweep as a WirelessDataPoint::ChannelData container.</div></div>",5742:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5742\" class=\"NDPrototype NoParameterForm\">SamplingType samplingType() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the SamplingType for this sweep</div></div>",5743:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5743\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> nodeRssi() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Node RSSI value that identifies the received signal strength at the Node</div></div>",5744:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5744\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> baseRssi() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Base Station RSSI value that identifies the received signal strength at the BaseStation for this sweep</div></div>",5745:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5745\" class=\"NDPrototype NoParameterForm\">WirelessTypes::Frequency frequency() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the radio frequency that this DataSweep was collected on</div></div>",5746:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5746\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> calApplied() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether calibration coefficients have been applied to the data already.</div></div>",5747:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5747\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> timestamp(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Timestamp&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">time</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the timestamp of the sweep</div></div>",5748:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5748\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> tick(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">tick</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the tick of the sweep</div></div>",5749:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5749\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> sampleRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SampleRate&nbsp;</td><td class=\"PName last\">rate</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the sample rate of the sweep</div></div>",5750:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5750\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> nodeAddress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">address</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the node address of the sweep</div></div>",5751:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5751\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> data(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelData&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the data of the sweep</div></div>",5752:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Sets the sampling mode of the sweep</div></div>",5753:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5753\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> nodeRssi(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">rssi</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Node RSSI value that identifies the received signal strength at the Node</div></div>",5754:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5754\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> baseRssi(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">rssi</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Base Station RSSI value that identifies the received signal strength at the Base Station for this sweep</div></div>",5755:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5755\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> frequency(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Frequency&nbsp;</td><td class=\"PName last\">freq</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the radio frequency that this DataSweep was collected on</div></div>",5756:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5756\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> calApplied(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">applied</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets whether calibration coefficients have been applied to the data already.</div></div>",5758:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a vector of DataSweep objects.</div></div>"});