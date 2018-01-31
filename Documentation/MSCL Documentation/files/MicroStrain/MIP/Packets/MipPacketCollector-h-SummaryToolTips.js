NDSummary.OnToolTipsLoaded("File:MicroStrain/MIP/Packets/MipPacketCollector.h",{1430:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1430\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipPacketCollector</div></div></div><div class=\"TTSummary\">Class that sets/matches expected responses, and stores all the Inertial packets</div></div>",1432:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1432\" class=\"NDPrototype NoParameterForm\">MipPacketCollector()</div><div class=\"TTSummary\">The default constructor for the MipPacketCollector</div></div>",1433:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1433\" class=\"NDPrototype NoParameterForm\">~MipPacketCollector()</div><div class=\"TTSummary\">The destructor for the MipPacketCollector</div></div>",1435:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a circular buffer of a MipDataPacket</div></div>",1437:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">The maximum number of data packets that can be stored in the circular buffer</div></div>",1439:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1439\" class=\"NDPrototype NoParameterForm\">circular_data_buffer m_dataPackets</div><div class=\"TTSummary\">A circular buffer that holds MipDataPackets</div></div>",1440:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1440\" class=\"NDPrototype NoParameterForm\">std::mutex m_packetMutex</div><div class=\"TTSummary\">A mutex used for thread safety when accessing/modifying the m_dataPackets buffer</div></div>",1441:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1441\" class=\"NDPrototype NoParameterForm\">std::condition_variable m_emptyBufferCondition</div><div class=\"TTSummary\">Allows the write to buffer thread to tell the reading thread when data is available</div></div>",1443:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1443\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> addDataPacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds a data packet to the data packets circular buffer</div></div>",1444:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1444\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> getDataPackets(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">vector&lt;MipDataPacket&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">packets,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName\">timeout</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName\">maxPackets</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets up to the requested amount of data packets that have been collected.</div></div>",1445:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1445\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> totalPackets()</div><div class=\"TTSummary\">Gets the total number of data packets that are currently in the buffer.</div></div>"});