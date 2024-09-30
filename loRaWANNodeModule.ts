enum LoRaBand {
    //% block="EU868"
    EU868,
    //% block="US915"
    US915,
    //% block="CN470"
    CN470,
}

enum LoRaDevType {
    //% block="CLASS_A"
    CLASS_A,
    //% block="CLASS_C"
    CLASS_C,
}

enum LoRaFreq868 {
    //% block="867.1MHz"
    EU868_8671 = 867100000,
    //% block="867.3MHz"
    EU868_8673 = 867300000,
    //% block="867.5MHz"
    EU868_8675 = 867500000,
    //% block="867.7MHz"
    EU868_8677 = 867700000,
    //% block="867.9MHz"
    EU868_8679 = 867900000,
    //% block="868.1MHz"
    EU868_8681 = 868100000,
    //% block="868.3MHz"
    EU868_8683 = 868300000,
    //% block="868.5MHz"
    EU868_8685 = 868500000,
    //% block="869.5MHz"
    EU868_8695 = 869500000,
}

enum LoRaFreq915 {
    //% block="903.0MHz"
    US915_9030 = 903000000,
    //% block="904.6MHz"
    US915_9046 = 904600000,
    //% block="906.2MHz"
    US915_9062 = 906200000,
    //% block="907.8MHz"
    US915_9078 = 907800000,
    //% block="909.4MHz"
    US915_9094 = 909400000,
    //% block="911.0MHz"
    US915_9110 = 911000000,
    //% block="912.6MHz"
    US915_9126 = 912600000,
    //% block="914.2MHz"
    US915_9142 = 914200000,
}

enum LoRaFreq470 {
    //% block="486.3MHz"
    CN470_4863 = 486300000,
    //% block="486.5MHz"
    CN470_4865 = 486500000,
    //% block="486.7MHz"
    CN470_4867 = 486700000,
    //% block="486.9MHz"
    CN470_4869 = 486900000,
    //% block="487.1MHz"
    CN470_4871 = 487100000,
    //% block="487.3MHz"
    CN470_4873 = 487300000,
    //% block="487.5MHz"
    CN470_4875 = 487500000,
    //% block="487.7MHz"
    CN470_4877 = 487700000,
    //% block="487.9MHz"
    CN470_4879 = 487900000,
    //% block="488.1MHz"
    CN470_4881 = 488100000,
    //% block="488.3MHz"
    CN470_4883 = 488300000,
    //% block="488.5MHz"
    CN470_4885 = 488500000,
    //% block="488.7MHz"
    CN470_4887 = 488700000,
    //% block="488.9MHz"
    CN470_4889 = 488900000,
    //% block="489.1MHz"
    CN470_4891 = 489100000,
    //% block="489.3MHz"
    CN470_4893 = 489300000,
}

enum LoRaEirp868 {
    //% block="DBM2"
    DBM2 = 2,
    //% block="DBM4"
    DBM4 = 4,
    //% block="DBM6"
    DBM6 = 6,
    //% block="DBM8"
    DBM8 = 8,
    //% block="DBM10"
    DBM10 = 10,
    //% block="DBM12"
    DBM12 = 12,
    //% block="DBM14"
    DBM14 = 14,
    //% block="DBM16"
    DBM16 = 16,
    //% block="DBM22"
    DBM22 = 22,
}

enum LoRaEirp915 {
    //% block="DBM2"
    DBM2 = 2,
    //% block="DBM4"
    DBM4 = 4,
    //% block="DBM6"
    DBM6 = 6,
    //% block="DBM8"
    DBM8 = 8,
    //% block="DBM10"
    DBM10 = 10,
    //% block="DBM12"
    DBM12 = 12,
    //% block="DBM14"
    DBM14 = 14,
    //% block="DBM16"
    DBM16 = 16,
    //% block="DBM18"
    DBM18 = 18,
    //% block="DBM20"
    DBM20 = 20,
    //% block="DBM22"
    DBM22 = 22,
}

enum LoRaEirp470 {
    //% block="DBM7"
    DBM7 = 7,
    //% block="DBM9"
    DBM9 = 9,
    //% block="DBM11"
    DBM11 = 11,
    //% block="DBM13"
    DBM13 = 13,
    //% block="DBM15"
    DBM15 = 15,
    //% block="DBM17"
    DBM17 = 17,
    //% block="DBM19"
    DBM19 = 19,
}

enum LoRaSF868 {
    //% block="7"
    SF7 = 7,
    //% block="8"
    SF8 = 8,
    //% block="9"
    SF9 = 9,
    //% block="10"
    SF10 = 10,
    //% block="11"
    SF11 = 11,
    //% block="12"
    SF12 = 12,
}

enum LoRaSF915 {
    //% block="7"
    SF7 = 7,
    //% block="8"
    SF8 = 8,
    //% block="9"
    SF9 = 9,
    //% block="10"
    SF10 = 10,
}

enum LoRaSF470 {
    //% block="7"
    SF7 = 7,
    //% block="8"
    SF8 = 8,
    //% block="9"
    SF9 = 9,
    //% block="10"
    SF10 = 10,
    //% block="11"
    SF11 = 11,
    //% block="12"
    SF12 = 12,
}

enum LoRaDr868 {
    //% block="DR0"
    DR0 = 0,
    //% block="DR1"
    DR1 = 1,
    //% block="DR2"
    DR2 = 2,
    //% block="DR3"
    DR3 = 3,
    //% block="DR4"
    DR4 = 4,
    //% block="DR5"
    DR5 = 5,
    //% block="DR6"
    DR6 = 6,
}

enum LoRaDr915 {
    //% block="DR0"
    DR0 = 0,
    //% block="DR1"
    DR1 = 1,
    //% block="DR2"
    DR2 = 2,
    //% block="DR3"
    DR3 = 3,
    //% block="DR4"
    DR4 = 4,

    //% block="DR8"
    DR8 = 8,
    //% block="DR9"
    DR9 = 9,
    //% block="DR10"
    DR10 = 10,
    //% block="DR11"
    DR11 = 11,
    //% block="DR12"
    DR12 = 12,
    //% block="DR13"
    DR13 = 13,
}

enum LoRaDr470 {
    //% block="DR0"
    DR0 = 0,
    //% block="DR1"
    DR1 = 1,
    //% block="DR2"
    DR2 = 2,
    //% block="DR3"
    DR3 = 3,
    //% block="DR4"
    DR4 = 4,
    //% block="DR5"
    DR5 = 5,
}


enum LoRaSubBand915 {
    //% block="SubBand1"
    SubBand1 = 1,
    //% block="SubBand2"
    SubBand2 = 2,
    //% block="SubBand3"
    SubBand3 = 3,
    //% block="SubBand4"
    SubBand4 = 4,
    //% block="SubBand5"
    SubBand5 = 5,
    //% block="SubBand6"
    SubBand6 = 6,
    //% block="SubBand7"
    SubBand7 = 7,
    //% block="SubBand8"
    SubBand8 = 8,
    //% block="SubBand9"
    SubBand9 = 9,
}

enum LoRaSubBand470 {
    //% block="SubBand1"
    SubBand1 = 1,
    //% block="SubBand2"
    SubBand2 = 2,
    //% block="SubBand3"
    SubBand3 = 3,
    //% block="SubBand4"
    SubBand4 = 4,
    //% block="SubBand5"
    SubBand5 = 5,
    //% block="SubBand6"
    SubBand6 = 6,
    //% block="SubBand7"
    SubBand7 = 7,
    //% block="SubBand8"
    SubBand8 = 8,
    //% block="SubBand9"
    SubBand9 = 9,
    //% block="SubBand10"
    SubBand10 = 10,
    //% block="SubBand11"
    SubBand11 = 11,
    //% block="SubBand12"
    SubBand12 = 12,
}

enum LoRaPacketType {
    UNCONFIRMED_PACKET,
    CONFIRMED_PACKET,
}

enum LoRaCommand {
    //% block="Query DEVEUI"
    QUERY_DEVEUI,
    //% block="Query JOINEUI"
    QUERY_JOINEUI,
    //% block="Query DEVADDR"
    QUERY_DEVADDR,
    //% block="Query NWKSKEY"
    QUERY_NWKSKEY,
    //% block="Query APPSKEY"
    QUERY_APPSKEY,
    //% block="Query Join Type (JOINTYPE)"
    QUERY_JOINTYPE,
    //% block="Query Join Status (JOIN)"
    QUERY_JOIN,
    //% block="Query Communication Port (PORT)"
    QUERY_PORT,
    //% block="Query Communication Frequency (FREQS)"
    QUERY_FREQS,
    //% block="Query Current Region (REGION)"
    QUERY_REGION,
    //% block="Query SUBBAND"
    QUERY_SUBBAND,
    //% block="Query Transmit Power (EIPR)"
    QUERY_EIRP,
    //% block="Query Data Rate (DATARATE)"
    QUERY_DATARATE,
    //% block="Query SNR"
    QUERY_SNR,
    //% block="Query RSSI"
    QUERY_RSSI,
    //% block="Query Packet Type (TYPE)"
    QUERY_UPLINKTYPE,
    //% block="Query Device Class (CLASS)"
    QUERY_CLASS,
    //% block="Query Adaptive Data Rate (ADR)"
    QUERY_ADR,
    //% block="Restart (REBOOT)"
    REBOOT
}

//% color="#FFD43B" icon="\uf09e"
//% groups=['CONNECT_NODE', 'CONNECT_GATEWAY']
namespace LoRaWAN {
    /**
     * Initialize module I2C address and configurations
     */
    //% blockId=lorawan_initialize
    //% block="Node initialize"
    //% weight=180
    //% group="CONNECT_NODE"
    export function initialize(): void {}

    /**
     * Select node communication band and set node LoRa address
     * @param band Region selection
     * @param address Device address
     */
    //% blockId=lorawan_config_node
    //% block="Connect node initial configuration | Region: $band| Device Address: $address"
    //% band.defl=LoRaBand.EU868
    //% address.min=1 address.max=255 address.defl=1
    //% inlineInputMode=external
    //% weight=170
    //% group="CONNECT_NODE"
    export function configNode(band: LoRaBand, address: number): void {}

    /**
     * Start connecting the node
     */
    //% blockId=lorawan_connect_node
    //% block="Establish node connection"
    //% weight=165
    //% group="CONNECT_NODE"
    export function connectNode(): void {}

    /**
     * Send data to a node at a specific address (range 1-255, 0 is invalid)
     * @param address Device address
     * @param data Data to send
     */
    //% blockId=lorawan_send_data
    //% block="Send data $data to node address $address"
    //% address.min=1 address.max=255 address.defl=1
    //% data.defl="hello"
    //% weight=160
    //% group="CONNECT_NODE"
    export function sendData(address: number, data: string): void {}

    /**
     * Get node data
     */
    //% blockId=lorawan_get_data
    //% block="Obtain node data"
    //% weight=150
    //% group="CONNECT_NODE"
    export function getData(): string {
        return "下发数据";
    }

    /**
     * Connect node to gateway using OTAA and configure necessary parameters
     * @param band Region selection
     * @param appeui App EUI
     * @param appkey App key
     * @param devType Device type
     */
    //% blockId=lorawan_connect_otaa_gateway
    //% block="Connect Gateway OTAA configuration| Region: $band| APPEUI: $appeui| APPKEY: $appkey| Device Class:$devType"
    //% band.defl=LoRaBand.EU868
    //% appkey.defl="0102030405060708090A0B0C0D0E0F10"
    //% appeui.defl="DFDFDFDF00000000"
    //% devType.defl=LoRaDevType.CLASS_C
    //% inlineInputMode=external
    //% weight=140
    //% group="CONNECT_GATEWAY"
    export function connectOtaaGateway(band: LoRaBand, appeui: string, appkey: string, devType: LoRaDevType): void {}

    /**
     * Connect node to gateway using ABP and configure necessary parameters
     * @param band Region selection
     * @param nwkSkey Network session key
     * @param appSkey App session key
     * @param devAddr Device address
     * @param devType Device type
     */
    //% blockId=lorawan_connect_abp_gateway
    //% block="Connect Gateway ABP configuration| Region: $band| Device Address: $devAddr| Network Session Key: $nwkSkey| APP Session Key: $appSkey| Device Class:$devType"
    //% band.defl=LoRaBand.EU868
    //% nwkSkey.defl="87888888888888888888888888888888"
    //% appSkey.defl="89888888888888888888888888888888"
    //% devAddr.defl="DF000011"
    //% inlineInputMode=external
    //% weight=130
    //% group="CONNECT_GATEWAY"
    export function connectAbpGateway(band: LoRaBand, nwkSkey: string, appSkey: string, devAddr: string, devType: LoRaDevType): void {}

    /**
     * Start connecting to the gateway and send join request
     */
    //% blockId=lorawan_connect_gateway
    //% block="Establish Gateway connection"
    //% weight=120
    //% group="CONNECT_GATEWAY"
    export function connectGateway(): void {}

    /**
     * Check if node successfully joined. Returns true if connected
     */
    //% blockId=lorawan_is_connected
    //% block="Connect Gateway successfully"
    //% weight=110
    //% group="CONNECT_GATEWAY"
    export function isConnected(): number {
        return 0;
    }

    /**
     * Send data to the gateway
     * @param data data
     */
    //% blockId=lorawan_send_gateway_data
    //% block="Send data $data to Gateway"
    //% data.defl="hello"
    //% weight=100
    //% group="CONNECT_GATEWAY"
    export function sendGatewayData(data: string): void {}

    /**
     * Get gateway data
     */
    //% blockId=lorawan_get_gateway_data
    //% block="Obtain Gateway data"
    //% weight=90
    //% group="CONNECT_GATEWAY"
    export function getGatewayData(): string {
        return "下发数据";
    }

    /**
     * Advanced configuration for connecting to 868MHz node
     * @param freq Frequency
     * @param eirp Transmit power
     * @param sf Spreading factor
     */
    //% blockId=lorawan_connect_node_advanced_868
    //% block="Connect 868MHz node advanced configuration| Frequency(FREQ): $freq| Equivalent Isotroplcally Radiated Power(EIRP): $eirp| Bandwidth(BW): 125kHz| Spreading Factor Channel(SF): $sf"
    //% freq.defl=LoRaFreq868.EU868_8681
    //% eirp.defl=LoRaEirp868.DBM16
    //% sf.defl=LoRaSF868.SF12
    //% inlineInputMode=external
    //% weight=80
    //% advanced=true
    export function connectNodeAdvanced868(freq: LoRaFreq868, eirp: LoRaEirp868, sf: LoRaSF868): void {}

    /**
     * Advanced configuration for connecting to 915MHz node
     * @param freq Frequency
     * @param eirp Transmit power
     * @param sf Spreading factor
     */
    //% blockId=lorawan_connect_node_advanced_915
    //% block="Connect 915MHz node advanced configuration| Frequency(FREQ): $freq| Equivalent Isotroplcally Radiated Power(EIRP): $eirp| Bandwidth(BW): 125kHz| Spreading Factor Channel(SF): $sf"
    //% freq.defl=LoRaFreq915.US915_9030
    //% eirp.defl=LoRaEirp915.DBM22
    //% sf.defl=LoRaSF915.SF10
    //% inlineInputMode=external
    //% weight=70
    //% advanced=true
    export function connectNodeAdvanced915(freq: LoRaFreq915, eirp: LoRaEirp915, sf: LoRaSF915): void {}

    /**
     * Advanced configuration for connecting to 470MHz node
     * @param freq Frequency
     * @param eirp Transmit power
     * @param sf Spreading factor
     */
    //% blockId=lorawan_connect_node_advanced_470
    //% block="Connect 470MHz node advanced configuration| Frequency(FREQ): $freq| Equivalent Isotroplcally Radiated Power(EIRP): $eirp| Bandwidth(BW): 125kHz| Spreading Factor Channel(SF): $sf"
    //% freq.defl=LoRaFreq470.CN470_4863
    //% eirp.defl=LoRaEirp470.DBM19
    //% sf.defl=LoRaSF470.SF12
    //% inlineInputMode=external
    //% weight=60
    //% advanced=true
    export function connectNodeAdvanced470(freq: LoRaFreq470, eirp: LoRaEirp470, sf: LoRaSF470): void {}

    /**
     * Advanced configuration for connecting to 868MHz gateway
     * @param dr Data rate
     * @param eirp Transmit power
     * @param adr Adaptive data rate
     * @param packetType Packet type
     */
    //% blockId=lorawan_connect_gateway_advanced_868
    //% block="Connect 868MHz gateway advanced configuration| Communication DateRate(DateRate): $dr| Transmission Power(EIRP): $eirp| Adaptive DataRate(ADR): $adr| Packet Type: $packetType"
    //% dr.defl=LoRaDr868.DR5
    //% eirp.defl=LoRaEirp868.DBM16
    //% adr.defl=false
    //% adr.shadow="toggleOnOff"
    //% packetType.defl=LoRaPacketType.UNCONFIRMED_PACKET
    //% inlineInputMode=external
    //% weight=50
    //% advanced=true
    export function connectGatewayAdvanced868(dr: LoRaDr868, eirp: LoRaEirp868, adr: boolean, packetType: LoRaPacketType): void {}

    /**
     * Advanced configuration for connecting to 915MHz gateway
     * @param dr Data rate
     * @param eirp Transmit power
     * @param subband Subband
     * @param adr Adaptive data rate
     * @param packetType Packet type
     */
    //% blockId=lorawan_connect_gateway_advanced_915
    //% block="Connect 915MHz gateway advanced configuration| Communication DateRate(DateRate): $dr| Transmission Power(EIRP): $eirp| Communication SubBand(SubBand): $subband| Adaptive DataRate(ADR): $adr| Packet Type: $packetType"
    //% dr.defl=LoRaDr915.DR4
    //% eirp.defl=LoRaEirp915.DBM22
    //% subband.defl=LoRaSubBand915.SubBand8
    //% adr.defl=false
    //% adr.shadow="toggleOnOff"
    //% packetType.defl=LoRaPacketType.UNCONFIRMED_PACKET
    //% inlineInputMode=external
    //% weight=40
    //% advanced=true
    export function connectGatewayAdvanced915(dr: LoRaDr915, eirp: LoRaEirp915, subband: LoRaSubBand915, adr: boolean, packetType: LoRaPacketType): void { }
    
    /**
     * Advanced configuration for connecting to 470MHz gateway
     * @param dr Data rate
     * @param eirp Transmit power
     * @param subband Subband
     * @param adr Adaptive data rate
     * @param packetType Packet type
     */
    //% blockId=lorawan_connect_gateway_advanced_470
    //% block="Connect 470MHz gateway advanced configuration| Communication DateRate(DateRate): $dr| Transmission Power(EIRP): $eirp| Communication SubBand(SubBand): $subband| Adaptive DataRate(ADR): $adr| Packet Type: $packetType"
    //% dr.defl=LoRaDr470.DR5
    //% eirp.defl=LoRaEirp470.DBM19
    //% subband.defl=LoRaSubBand470.SubBand11
    //% adr.defl=false
    //% adr.shadow="toggleOnOff"
    //% packetType.defl=LoRaPacketType.UNCONFIRMED_PACKET
    //% inlineInputMode=external
    //% weight=30
    //% advanced=true
    export function connectGatewayAdvanced470(dr: LoRaDr470, eirp: LoRaEirp470, subband: LoRaSubBand470, adr: boolean, packetType: LoRaPacketType): void { }
    

    /**
     * Send commands to query or configure node
     * @param cmd Command
     */
    //% blockId=lora_send_command
    //% block="Send command $cmd and obtain return information"
    //% cmd.defl=LoRaCommand.QUERY_DEVEUI
    //% weight=20
    //% advanced=true
    export function sendCommand(cmd: LoRaCommand): string { 
        return "返回的信息"
    }
}

