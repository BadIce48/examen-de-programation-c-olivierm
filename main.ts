basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 450 && pins.analogReadPin(AnalogPin.P0) < 550) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P8, 1)
    } else if (pins.analogReadPin(AnalogPin.P0) < 450 && pins.analogReadPin(AnalogPin.P0) < 550) {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else if (pins.analogReadPin(AnalogPin.P0) > 450 && pins.analogReadPin(AnalogPin.P0) > 550) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
})
