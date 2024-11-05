enum LoRaTEXTTYPE {
    ASCII_TYPE,
    HEX_TYPE,
}

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

enum LoRaJoinType {
    ABP,
    OTAA,
}

enum LoRaCommand {
    //% block="Query DEVEUI"
    QUERY_DEVEUI,
    //% block="Query DEVADDR"
    QUERY_DEVADDR,
    //% block="Query SNR"
    QUERY_SNR,
    //% block="Query RSSI"
    QUERY_RSSI,
    //% block="Query NETID"
    QUERY_NETID,
}

//% color="#FFD43B" icon="\uf09e"
//% groups=['INIT', 'CONNECT_NODE', 'CONNECT_GATEWAY']
namespace LoRaWAN {
    let _I2CAddr = 32;

    let _deviceAddr = 0;

    let _appeSKey = pins.createBuffer(33);
    let _nwkSKey = pins.createBuffer(33);
    let _isOtaa = true
    let _deviceClass = LoRaDevType.CLASS_A; //
    let _dataRate = LoRaDr868.DR4;
    let _classType = LoRaDevType.CLASS_C; //
    let _txPower = LoRaEirp868.DBM10; //
    let _adr = false;
    let _subBand = 0;
    let _region = LoRaBand.EU868;
    let _devAddr = 0;//
    let _joinType = 1; // 0 ABP, 1 OTAA, 2 NONE
    let _from = 0;//
    let debug = false;

    let _REG_READ_AT_LEN = 65;//0x41
    let _REG_WRITE_AT = 64; //0x40
    let _REG_READ_AT = 66; //0x42
    /**
     * Initialize module I2C address and configurations
     */
    //% blockId=lorawan_initialize
    //% block="Node initialize"
    //% weight=180
    //% group="INIT"
    export function initialize(): void {
        _I2CAddr = 32
        nodereboot()
        
        while (nodeStartCheck() == false){
            basic.pause(1000)
        }
        //setTEXTTYPE(LoRaTEXTTYPE.ASCII_TYPE)
        debugLog(sendATCommand("AT+TEXTTYPE?"))
        debugLog(sendATCommand("AT+RECV=1"));
    }

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
    export function configNode(band: LoRaBand, address: number): void {
        let AT = ""
        sendATCommand("AT+LORAMODE=LORA");
        setRegion(band)
        setLoRaAddr(address)
    }

    /**
     * Start connecting the node
     */
    //% blockId=lorawan_connect_node
    //% block="Establish node connection"
    //% weight=165
    //% group="CONNECT_NODE"
    export function connectNode(): void {
        let AT = "AT+JOIN=1"
        debugLog(sendATCommand(AT))
    }

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
    export function sendData(address: number, data: string): void {
        let AT = "AT+SEND="
        let hexaddr = address.toString()
        let high = Math.trunc(address / 16);
        let low = address % 16
        AT += numberCovertAsciiString(high) + numberCovertAsciiString(low)
        high = Math.trunc(_from / 16);
        low = _from % 16
        AT += numberCovertAsciiString(high) + numberCovertAsciiString(low)
        AT += stringCovertAsciiString(data)

        debugLog("sendData=" + AT)
       
        debugLog(sendATCommand(AT))
    }

    /**
     * Get node data
     */
    //% blockId=lorawan_get_data
    //% block="Obtain node data"
    //% weight=150
    //% group="CONNECT_NODE"
    export function getData(): boolean {
        pins.i2cWriteNumber(_I2CAddr, _REG_READ_AT_LEN, NumberFormat.UInt8LE);
        let rbn = pins.i2cReadNumber(_I2CAddr, NumberFormat.UInt8LE);

        //读数据
        if (rbn > 0) {
            pins.i2cWriteNumber(_I2CAddr, _REG_READ_AT, NumberFormat.UInt8LE);
            let rb = pins.i2cReadBuffer(_I2CAddr, rbn, true)
            
            if (rb.length >= 10 && rb.slice(0,6).toString() === "+RECV="){
                let nrb = rb.slice(6)
                let _nodeDatalen = nrb[4]
                if (_nodeDatalen > 0){
                    if (nrb[0] === 0xFF || nrb[0] === _from) {
                        let _nodeData = nrb.slice(5, _nodeDatalen).toString().replaceAll("\r", "").replaceAll("\n", "")
                        let _nodeRSSI = -nrb[2]
                        let _nodeSNR = nrb[3] - 50
                        let _nodeFrom = nrb[1]

                        console.log("recv from:" + _nodeFrom + ", recv data: " + _nodeData + ", rssi=" + _nodeRSSI + ",snr=" + _nodeSNR)

                        return true
                    }
                }
            }
            return false
        }
        return false;
    }

    //% block="Connect gateway advanced configuration Adaptive From:[from] Data: [data]  RSSI: [rssi]  SNR: [snr]"
    //% blockType="hat"
    //% from.shadow="string"
    //% data.shadow="string"
    //% snr.shadow="string"
    export function P2PRecv(parameter: any, block: any) {
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
    export function connectOtaaGateway(band: LoRaBand, appeui: string, appkey: string, devType: LoRaDevType): void {
        _joinType = 1
        setRegion(band)
        if (setJoinType(LoRaJoinType.OTAA)){
            setAppEUI(appeui)
            setAppKEY(appkey)
            setDeiveClass(devType)
        }
    }

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
    export function connectAbpGateway(band: LoRaBand, nwkSkey: string, appSkey: string, devAddr: string, devType: LoRaDevType): void {
        _joinType = 0
        sendATCommand("AT+LORAMODE=LORAWAN");
        setRegion(band)
        if(setJoinType(LoRaJoinType.ABP)){
            setNwkSKey(nwkSkey)
            setDeiveClass(devType)
            setAppSKey(appSkey)
            setDevAddr(devAddr)
        }
    }

    /**
     * Start connecting to the gateway and send join request
     */
    //% blockId=lorawan_connect_gateway
    //% block="Establish Gateway connection"
    //% weight=120
    //% group="CONNECT_GATEWAY"
    export function connectGateway(): void {
        let AT = "AT+JOIN=1"
        let ack = sendATCommand(AT)
        if (!ack.includes("+JOIN=OK")){
            debugLog("connectGateway ack: " + ack)
        }
    }

    /**
     * Check if node successfully joined. Returns true if connected
     */
    //% blockId=lorawan_is_connected
    //% block="Connect Gateway successfully"
    //% weight=110
    //% group="CONNECT_GATEWAY"
    export function isConnected(): boolean {
        let AT = "AT+JOIN?"
        let ack = sendATCommand(AT)
        if (ack.includes("+JOIN=1")){
            return true
        }
        debugLog("isConnected ack: " + ack)
        return false;
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
    export function sendGatewayData(data: string): void {
        let AT = "AT+SEND=" + stringCovertAsciiString(data) //+ data
        //let AT = "AT+SEND=" +data
        let ack = sendATCommand(AT)
        if (ack.includes("+SEND=FAIL")){
            debugLog("sendGatewayData ack: "+ack)
        }
    }

    /**
     * Get gateway data
     */
    //% blockId=lorawan_get_gateway_data
    //% block="Obtain Gateway data"
    //% weight=90
    //% group="CONNECT_GATEWAY"
    export function getGatewayData(): string {
        pins.i2cWriteNumber(_I2CAddr, _REG_READ_AT_LEN, NumberFormat.UInt8LE);
        let rbn = pins.i2cReadNumber(_I2CAddr, NumberFormat.UInt8LE);

        //读数据
        if (rbn > 0) {
            pins.i2cWriteNumber(_I2CAddr, _REG_READ_AT, NumberFormat.UInt8LE);
            let rb = pins.i2cReadBuffer(_I2CAddr, rbn, true)
            return rb.slice(3).toString().replaceAll("\r", "").replaceAll("\n", "")
        }
        return "";
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
    export function connectNodeAdvanced868(freq: LoRaFreq868, eirp: LoRaEirp868, sf: LoRaSF868): void {
        setFreq(freq)
        setEIRP(eirp)
        setBW(125000)
        setSF(sf)
    }

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
    export function connectNodeAdvanced915(freq: LoRaFreq915, eirp: LoRaEirp915, sf: LoRaSF915): void {
        setFreq(freq)
        setEIRP(eirp)
        setBW(125000)
        setSF(sf)
    }

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
    export function connectNodeAdvanced470(freq: LoRaFreq470, eirp: LoRaEirp470, sf: LoRaSF470): void {
        setFreq(freq)
        setEIRP(eirp)
        setBW(125000)
        setSF(sf)
    }

    /**
     * Advanced configuration for connecting to 868MHz gateway
     * @param dr Data rate
     * @param eirp Transmit power
     * @param adr Adaptive data rate
     * @param packetType Packet type
     */
    //% blockId=lorawan_connect_gateway_advanced_868
    //% block="Connect 868MHz gateway advanced configuration| Communication DateRate(DateRate): $dr| Transmission Power(EIRP): $eirp| Packet Type: $packetType"
    //% dr.defl=LoRaDr868.DR5
    //% eirp.defl=LoRaEirp868.DBM16
    //% packetType.defl=LoRaPacketType.UNCONFIRMED_PACKET
    //% inlineInputMode=external
    //% weight=50
    //% advanced=true
    export function connectGatewayAdvanced868(dr: LoRaDr868, eirp: LoRaEirp868, packetType: LoRaPacketType): void {
        setDataRate(dr)
        setEIRP(eirp)
        setPacketType(packetType)
        enableADR(false)
    }

    /**
     * Advanced configuration for connecting to 915MHz gateway
     * @param dr Data rate
     * @param eirp Transmit power
     * @param subband Subband
     * @param adr Adaptive data rate
     * @param packetType Packet type
     */
    //% blockId=lorawan_connect_gateway_advanced_915
    //% block="Connect 915MHz gateway advanced configuration| Communication DateRate(DateRate): $dr| Transmission Power(EIRP): $eirp| Communication SubBand(SubBand): $subband| Packet Type: $packetType"
    //% eirp.defl=LoRaEirp915.DBM22
    //% subband.defl=LoRaSubBand915.SubBand8
    //% packetType.defl=LoRaPacketType.UNCONFIRMED_PACKET
    //% inlineInputMode=external
    //% weight=40
    //% advanced=true
    export function connectGatewayAdvanced915(dr: LoRaDr915, eirp: LoRaEirp915, subband: LoRaSubBand915, packetType: LoRaPacketType): void {
        setDataRate(dr)
        setEIRP(eirp)
        setPacketType(packetType)
        enableADR(false)
        setSubBand(subband)
     }
    
    /**
     * Advanced configuration for connecting to 470MHz gateway
     * @param dr Data rate
     * @param eirp Transmit power
     * @param subband Subband
     * @param adr Adaptive data rate
     * @param packetType Packet type
     */
    //% blockId=lorawan_connect_gateway_advanced_470
    //% block="Connect 470MHz gateway advanced configuration| Communication DateRate(DateRate): $dr| Transmission Power(EIRP): $eirp| Communication SubBand(SubBand): $subband| Packet Type: $packetType"
    //% dr.defl=LoRaDr470.DR5
    //% eirp.defl=LoRaEirp470.DBM19
    //% subband.defl=LoRaSubBand470.SubBand11
    //% packetType.defl=LoRaPacketType.UNCONFIRMED_PACKET
    //% inlineInputMode=external
    //% weight=30
    //% advanced=true
    export function connectGatewayAdvanced470(dr: LoRaDr470, eirp: LoRaEirp470, subband: LoRaSubBand470, adr: boolean, packetType: LoRaPacketType): void {
        setDataRate(dr)
        setEIRP(eirp)
        setPacketType(packetType)
        enableADR(false)
        setSubBand(subband)
     }
    

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
        let AT = ""
        let indextype = 0 //0-表示一种处理方式，1表示另一种处理方式
        let indexs = 0
        let indexe = 0
        switch (cmd) {
            case LoRaCommand.QUERY_DEVEUI:
                AT = "AT+DEVEUI?"
                indexs = 8
                indexe = 26
                break
            case LoRaCommand.QUERY_DEVADDR:
                AT = "AT+DEVADDR?"
                indexs = 9
                indexe = 17
                break
            case LoRaCommand.QUERY_SNR:
                AT = "AT+SNR?"
                indextype = 1
                indexs = 5
                indexe = 2
                break
            case LoRaCommand.QUERY_RSSI:
                AT = "AT+RSSI?"
                indextype = 1
                indexs = 6
                indexe = 2
                break
            case LoRaCommand.QUERY_NETID:
                AT = "AT+NETID?"
                indextype = 0
                indexs = 7
                indexe = 17
                break
        }
        if (AT.length == 0) {
            return "AT len is zero"
        }
        return sendATCommand(AT)
    
    }
    function setJoinType(join: LoRaJoinType): boolean {
        let ack = ""
        switch (join){
            case LoRaJoinType.ABP:
                ack = sendATCommand("AT+JOINTYPE=ABP")
                break
            case LoRaJoinType.OTAA:
                ack = sendATCommand("AT+JOINTYPE=OTAA")
                break
        }
        if (ack.includes("+JOINTYPE=OK")){
            return true
        }
        debugLog("setJoinType ack"+ack)
        return false
    }
    function setAppSKey(appskey: string): boolean{
        if (appskey.length != 32) {
            debugLog("appskey error：Invalid length, expected 32 hex chars, only " + appskey.length)
            return false
        }
        if (!isHexString(appskey)) {
            debugLog("appskey error：Invalid hex string, " + appskey)
            return false
        }
        
        let ack = sendATCommand("AT+APPSKEY=" + appskey.toUpperCase())
        if (ack.includes("+APPSKEY=OK")){
            return true
        }
        debugLog("setAppSKey ack"+ack)
        return false
    }
    function setNwkSKey(nwkSKey: string): boolean {
        if (nwkSKey.length != 32) {
            debugLog("appskey error：Invalid length, expected 32 hex chars, only " + nwkSKey.length)
            return false
        }
        if (!isHexString(nwkSKey)) {
            debugLog("appskey error：Invalid hex string, " + nwkSKey)
            return false
        }
        let ack = sendATCommand("AT+NWKSKEY=" + nwkSKey.toUpperCase())
        if (ack.includes("+NWKSKEY=OK")) {
            return true
        }
        debugLog("setNwkSKey ack" + ack)
        return false
    }
    function setDevAddr(devAddr: string): boolean {
        if (devAddr.length != 8) {
            debugLog("devAddr error：Invalid length, expected 8 hex chars, only " + devAddr.length)
            return false
        }
        if (!isHexString(devAddr)) {
            debugLog("appskey error：Invalid hex string, " + devAddr)
            return false
        }
        let ack = sendATCommand("AT+DEVADDR=" + devAddr.toUpperCase())
        if (ack.includes("+DEVADDR=OK")) {
            return true
        }
        debugLog("setDevAddr ack" + ack)
        return false
    }
    function setRegion(band: LoRaBand): boolean{
        let ack = ""
        switch (band){
            case LoRaBand.EU868:
                ack = sendATCommand("AT+REGION=EU868")
                break
            case LoRaBand.US915:
                ack = sendATCommand("AT+REGION=US915")
                break
            case LoRaBand.CN470:
                ack = sendATCommand("AT+REGION=CN470")
                break
            default:
                debugLog("unsupported region")
                return false
        }

        if (ack.includes("+REGION=OK") == true){
            _region = band
            return true
        }
        debugLog("setRegion ack: " + ack)
       
       return false
    }

    function setAppEUI(appeui: string): boolean{
        if (appeui.length != 16) {
            debugLog("appeui error：Invalid length, expected 16 hex chars, only " + appeui.length)
            return false
        }
        if (!isHexString(appeui)) {
            debugLog("appeui error：Invalid hex string, " + appeui)
            return false
        }
        let AT = "AT+JOINEUI=" + appeui.toUpperCase()
        let ack = sendATCommand(AT)
        if (ack.includes("+JOINEUI=OK") == true) {
            return true
        }
        debugLog("setAppEUI ack: " + ack)
        return false
    }
    function setAppKEY(appkey: string): boolean {
        if (appkey.length != 32) {
            debugLog("appeui error：Invalid length, expected 32 hex chars, only " + appkey.length)
            return false
        }
        if (!isHexString(appkey)) {
            debugLog("appkey error：Invalid hex string, " + appkey)
            return false
        }
        let AT = "AT+APPKEY=" + appkey.toUpperCase()
        let ack = sendATCommand(AT)
        if (ack.includes("+APPKEY=OK") == true) {
            return true
        }
        debugLog("setAppKEY ack: " + ack)
        return false
    }

    function setDeiveClass(classtype: LoRaDevType): boolean {
        let ack = ""
        switch (classtype){
            case LoRaDevType.CLASS_A:
                ack = sendATCommand("AT+CLASS=CLASS_A")
                break
            case LoRaDevType.CLASS_C:
                ack = sendATCommand("AT+CLASS=CLASS_C")
                break
        }
        if (ack.includes("+CLASS=OK") == true) {
            return true
        }
        debugLog("setDeiveClass ack: " + ack)
        return false
    }
    
    function setTEXTTYPE(textype:LoRaTEXTTYPE):boolean{
        let ack = ""
        switch (textype){
            case LoRaTEXTTYPE.ASCII_TYPE:
                ack = sendATCommand("AT+TEXTTYPE=ASCII")
                break
            case LoRaTEXTTYPE.HEX_TYPE:
                ack = sendATCommand("AT+TEXTTYPE=HEX")
                break
        }
        if (ack.includes("+TEXTTYPE=OK")){
            return true
        }
        debugLog("setTEXTTYPE ack: " + ack)
        return false
    }

    function nodereboot():void{
        let ack = sendATCommand("AT+REBOOT")
        debugLog("nodereboot ack"+ack)
    }

    function nodeStartCheck(): boolean{
        let ack = sendATCommand("AT")
        if (ack.includes("OK")){
            return true
        }
        debugLog("nodeStartCheck ack: " + ack)
        return false
    }

    function setPacketType(ptype: LoRaPacketType): boolean {
        let ack = ""
        switch (ptype){
            case LoRaPacketType.UNCONFIRMED_PACKET:
                ack = sendATCommand("AT+UPLINKTYPE=UNCONFIRMED")
                break
            case LoRaPacketType.CONFIRMED_PACKET:
                ack = sendATCommand("AT+UPLINKTYPE=CONFIRMED")
                break
        }
        
        if (ack.includes("+UPLINKTYPE=OK")) {
            return true
        }
        debugLog("setPacketType ack: " + ack)
        return false
    }

    function setSubBand(subBand: number): boolean {
        let ack = sendATCommand("AT+SUBBAND=" + subBand.toString())
        if (ack.includes("+SUBBAND=OK")) {
            return true
        }
        debugLog("setSubBand ack: " + ack)
        return false
    }

    function enableADR(adr: boolean): boolean {
        let ack = "" 
        if (adr) {
            ack = sendATCommand("AT+ADR=1")
        }else{
            ack = sendATCommand("AT+ADR=0")
        }
        if (ack.includes("+ADR=OK")) {
            return true
        }
        debugLog("enableADR ack: " + ack)
        return false
    }

    function setDataRate(dr: number): boolean {
        let ack = sendATCommand("AT+DATARATE=" + dr.toString())
        if (ack.includes("+DATARATE=OK")) {
            return true
        }
        debugLog("setDataRate ack: " + ack)
        return false
    }

    function setLoRaAddr(address: number): boolean {
        let ack = sendATCommand("AT+LORAADDR=" + address.toString())
        if (ack.includes("+LORAADDR=OK")){
            _from = address
            return true
        }
        debugLog("setLoRaAddr ack: " + ack)
        return false
    }

    function setEIRP(eirp: number): boolean {
        let ack = sendATCommand("AT+EIRP=" + eirp.toString())
        if (ack.includes("+EIRP=OK")) {
            return true
        }
        debugLog("setEIRP ack: " + ack)
        return false
    }

    function setFreq(freq: number): boolean {
        let ack = sendATCommand("AT+FREQS=" + freq.toString())
        if (ack.includes("+FREQS=OK")) {
            return true
        }
        debugLog("setFreq ack: " + ack)
        return false
    }

    function setBW(bw: number): boolean {
        let ack = sendATCommand("AT+BW=" + bw.toString())
        console.log("AT+BW=" + bw.toString())
        if (ack.includes("+BW=OK")) {
            return true
        }
        debugLog("setBW ack: " + ack)
        return false
    }

    function setSF(sf: number): boolean {
        let ack = sendATCommand("AT+SF=" + sf.toString())
        console.log("AT+SF=" + sf.toString())
        if (ack.includes("+SF=OK")) {
            return true
        }
        debugLog("setSF ack: " + ack)
        return false
    }
    

    function stringCovertAsciiString(msg: string):string{
        let hexStr = "";
        debugLog("origin: " + msg)
        for (let i = 0; i < msg.length; i++) {
            let charCode = msg.charCodeAt(i);
            let hexCode = ""
            let high = Math.trunc(charCode / 16);
            let low = charCode % 16
            hexCode = numberCovertAsciiString(high) + numberCovertAsciiString(low)
            hexStr += hexCode;
        }
        debugLog("hex str: " + hexStr)
        return hexStr
    }

    function numberCovertAsciiString(n: number): string{
        // 0<= n <= 15
        let hexCode = ""
        switch (n) {
            case 10:
                hexCode = "A"
                break
            case 11:
                hexCode = "B"
                break
            case 12:
                hexCode = "C"
                break
            case 13:
                hexCode = "D"
                break
            case 14:
                hexCode = "E"
                break
            case 15:
                hexCode = "F"
                break
            default:
                hexCode = n.toString()
        }
        return hexCode
    }

    function sendATCommand(cmd: string): string {
        if (cmd.length == 0) {
            return "AT len is zero"
        }
        cmd += "\r\n"
        
        let _buf = pins.createBuffer(cmd.length + 1);
        _buf[0] = _REG_WRITE_AT
        for (let i = 0; i < cmd.length; i++) {
            _buf[1 + i] = cmd.charCodeAt(i);
        }
        pins.i2cWriteBuffer(_I2CAddr, _buf);
        //basic.pause(800)
        //获取需要读取内容的字节数
        pins.i2cWriteNumber(_I2CAddr, _REG_READ_AT_LEN, NumberFormat.UInt8LE);
        let rbn = 0;
        let cnt = 0
        while (rbn == 0 && cnt < 3){
            rbn = pins.i2cReadNumber(_I2CAddr, NumberFormat.UInt8LE);
            basic.pause(800)
            cnt++
        }
        //读数据
        if (rbn > 0){
            pins.i2cWriteNumber(_I2CAddr, _REG_READ_AT, NumberFormat.UInt8LE);
            let rb = pins.i2cReadBuffer(_I2CAddr, rbn, true)
            return rb.toString().replaceAll("\r", "").replaceAll("\n", "")
        }
        return "no response."
       
    }

    function isHexString(value: string): boolean {
        const hexChars = "0123456789ABCDEFabcdef";
        for (let i = 0; i < value.length; i++){
            if (!hexChars.includes(value[i])){
                return false
            }
        }
        return true
    }

    function debugLog(value: any): void{
        debug = true
        if (debug){
            console.log(value)
        }
    }
}



