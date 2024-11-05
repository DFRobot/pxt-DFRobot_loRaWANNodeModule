serial.redirect(
SerialPin.P12,
SerialPin.P13,
BaudRate.BaudRate115200
)
basic.pause(5000)
LoRaWAN.initialize()
LoRaWAN.configNode(
LoRaBand.EU868,
4
)
LoRaWAN.connectNodeAdvanced868(
LoRaFreq868.EU868_8681,
LoRaEirp868.DBM16,
LoRaSF868.SF12
)
LoRaWAN.connectNode()
serial.writeString("initialize complete!")
loops.everyInterval(500, function () {
    serial.writeString("")
    if (LoRaWAN.getData()) {
    	
    }
})
