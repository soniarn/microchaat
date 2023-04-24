radio.onReceivedNumber(function (receivedNumber) {
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("smile")
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    radio.sendNumber(1)
})
radio.setGroup(2)
