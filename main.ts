let strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(100)
})
basic.forever(function () {
    basic.showIcon(IconNames.Sad)
})
