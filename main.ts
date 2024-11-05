serial.redirect(
SerialPin.P12,
SerialPin.P13,
BaudRate.BaudRate115200
)
basic.pause(5000)
LoRaWAN.initialize()
LoRaWAN.connectAbpGateway(
LoRaBand.EU868,
"87888888888888888888888888888888",
"89888888888888888888888888888888",
"DF000011",
LoRaDevType.CLASS_A
)
LoRaWAN.connectGateway()
let count = 1
serial.writeLine("initialize complete!")
loops.everyInterval(2000, function () {
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
})
