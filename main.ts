serial.redirect(
SerialPin.P12,
SerialPin.P13,
BaudRate.BaudRate115200
)
basic.pause(5000)
LoRaWAN.initialize()
LoRaWAN.connectOtaaGateway(
LoRaBand.EU868,
"DFDFDFDF00000000",
"0102030405060708090A0B0C0D0E0F10",
LoRaDevType.CLASS_A
)
LoRaWAN.connectGateway()
let count = 1
serial.writeLine("initialize complete!")
loops.everyInterval(2000, function () {
    if (LoRaWAN.isConnected()) {
        LoRaWAN.sendGatewayData("hello" + convertToText(count))
        count += 1
        serial.writeLine("")
        serial.writeLine(LoRaWAN.sendCommand(LoRaCommand.QUERY_DEVEUI))
        serial.writeLine(LoRaWAN.sendCommand(LoRaCommand.QUERY_DEVADDR))
        serial.writeLine(LoRaWAN.sendCommand(LoRaCommand.QUERY_SNR))
        serial.writeLine(LoRaWAN.sendCommand(LoRaCommand.QUERY_RSSI))
        serial.writeLine(LoRaWAN.sendCommand(LoRaCommand.QUERY_NETID))
        serial.writeLine("")
        basic.pause(5000)
        basic.pause(5000)
    }
})
