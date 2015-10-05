NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Packets/WirelessPacketCollector.h",{2200:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2200\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessPacketCollector</div></div></div><div class=\"TTSummary\">Class that sets/matches expected responses, and stores all the wireless packets</div></div>",2202:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2202\" class=\"NDPrototype NoParameterForm\">WirelessPacketCollector()</div><div class=\"TTSummary\">The default constructor for the WirelessPacketCollector</div></div>",2203:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2203\" class=\"NDPrototype NoParameterForm\">~WirelessPacketCollector()</div><div class=\"TTSummary\">The destructor for the WirelessPacketCollector</div></div>",2205:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2205\" class=\"NDPrototype NoParameterForm\">circular_data_buffer m_dataPackets</div><div class=\"TTSummary\">A circular buffer that holds WirelessDataPackets</div></div>",2206:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2206\" class=\"NDPrototype NoParameterForm\">circular_discovery_buffer m_nodeDiscoveryPackets</div><div class=\"TTSummary\">A circular buffer that holds NodeDiscovery objects</div></div>",2207:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2207\" class=\"NDPrototype NoParameterForm\">WirelessDataPacket m_currentDataPacket</div><div class=\"TTSummary\">The current WirelessDataPacket in the buffer</div></div>",2208:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2208\" class=\"NDPrototype NoParameterForm\">std::mutex m_packetMutex</div><div class=\"TTSummary\">A mutex used for thread safety when accessing/modifying the m_dataPackets buffer</div></div>",2209:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2209\" class=\"NDPrototype NoParameterForm\">std::mutex m_nodeDiscoveryMutex</div><div class=\"TTSummary\">A mutex used for thread safety when accessing/modifying the m_nodeDiscoveryPackets buffer</div></div>",2210:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2210\" class=\"NDPrototype NoParameterForm\">std::condition_variable m_emptyBufferCondition</div><div class=\"TTSummary\">Allows the write to buffer thread to tell the reading thread when data is available</div></div>",2212:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2212\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> addDataPacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds a data packet to the data packets circular buffer.</div></div>",2213:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2213\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> addNodeDiscoveryPacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds a Node Discovery packet to the circular buffer.&nbsp; The provided WirelessPacket must be a valid Node Discovery packet.</div></div>",2214:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2214\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> getNextDataSweep(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataSweep&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">sweep,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">timeout</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the next DataSweep in the current WirelessDataPacket (or in the next WirelessDataPacket if there are no more sweeps in the current one)</div></div>",2215:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2215\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> getDataSweeps(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">vector&lt;DataSweep&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">sweeps,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName\">timeout&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName\">maxSweeps&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets up to the requested amount of data sweeps that have been collected.</div></div>",2216:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2216\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> totalSweeps()</div><div class=\"TTSummary\">Gets the total number of data sweeps that are currently in the buffer.</div></div>",2217:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2217\" class=\"NDPrototype NoParameterForm\">NodeDiscoveries getNodeDiscoveries()</div><div class=\"TTSummary\">Gets a vector of NodeDiscovery objects that were collected</div></div>",2218:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2218\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessDataPacket getNextDataPacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">timeout</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the next WirelessDataPacket in the buffer</div></div>"});