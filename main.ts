serial.redirect(
SerialPin.P12,
SerialPin.P13,
BaudRate.BaudRate115200
)
basic.pause(5000)
LoRaWAN.initialize()
serial.writeLine(LoRaWAN.sendCommand(LoRaCommand.QUERY_DEVEUI))
LoRaWAN.connectOtaaGateway(
LoRaBand.EU868,
"DFDFDFDF00000000",
"0102030405060708090A0B0C0D0E0F10",
LoRaDevType.CLASS_C
)
LoRaWAN.connectGatewayAdvanced868(
LoRaDr868.DR4,
LoRaEirp868.DBM16,
LoRaPacketType.UNCONFIRMED_PACKET
)
LoRaWAN.connectGatewayOfOTAA()
for (let index = 0; index < 50; index++) {
    if (LoRaWAN.isConnected()) {
        serial.writeLine("join success!")
        break;
    }
    basic.pause(1000)
}
serial.writeLine(LoRaWAN.sendCommand(LoRaCommand.QUERY_DEVADDR))
serial.writeLine(LoRaWAN.sendCommand(LoRaCommand.QUERY_NETID))
loops.everyInterval(500, function () {
    if (LoRaWAN.getGatewayData()) {
        serial.writeLine("data: " + LoRaWAN.readGatewayDownlinkPacket(LoRaDownlinkPktContext.DATA) + ", snr: " + LoRaWAN.readGatewayDownlinkPacket(LoRaDownlinkPktContext.SNR))
        serial.writeLine("")
    }
})
