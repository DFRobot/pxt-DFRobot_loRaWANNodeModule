LoRaWAN.onP2PReceived(function (sourceaddr, data, snr) {
    serial.writeLine("source addr: " + sourceaddr + ", data:" + data + ", snr:" + snr)
})
serial.redirect(
SerialPin.P12,
SerialPin.P13,
BaudRate.BaudRate115200
)
basic.pause(5000)
LoRaWAN.initialize()
LoRaWAN.connectNodeAdvanced868(
1,
LoRaFreq868.EU868_8681,
LoRaEirp868.DBM16,
LoRaSF868.SF12
)
LoRaWAN.connectNode()
