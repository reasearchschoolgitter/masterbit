enum RadioMessage {
    message1 = 49434,
    otaupdate = 23912,
    ngame = 13805,
    zero = 7640,
    vol_stop = 31231,
    scoreinbound = 61264,
    test = 2239
}
radio.onReceivedMessage(RadioMessage.scoreinbound, function () {
    radio.sendMessage(RadioMessage.scoreinbound)
})
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.vol_stop)
})
// looks usless but is a little usefulif someone moves then they will be spamming with updates allowing for faster tranport
radio.onReceivedMessage(RadioMessage.otaupdate, function () {
    radio.sendMessage(RadioMessage.otaupdate)
})
radio.onReceivedMessage(RadioMessage.ngame, function () {
    radio.sendMessage(RadioMessage.zero)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("test")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendMessage(RadioMessage.otaupdate)
})
basic.showString("masterbit (rot (radio of things) complete ")
radio.setGroup(91)
radio.setTransmitPower(7)
