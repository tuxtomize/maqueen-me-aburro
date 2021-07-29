radio.onReceivedString(function (receivedString) {
    if (receivedString == "alante") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    } else {
        if (receivedString == "atras") {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        } else {
            if (receivedString == "parar") {
                maqueen.motorStop(maqueen.Motors.All)
            } else {
                if (receivedString == "derecha") {
                    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
                    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
                    basic.pause(200)
                    maqueen.motorStop(maqueen.Motors.All)
                } else {
                    if (receivedString == "izquierda") {
                        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
                        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
                        basic.pause(200)
                        maqueen.motorStop(maqueen.Motors.All)
                    } else {
                        if (receivedString == "encender") {
                            basic.showLeds(`
                                . . . . .
                                . # . # .
                                . . . . .
                                # . . . #
                                . # # # .
                                `)
                        } else {
                            if (receivedString == "apagar") {
                                basic.clearScreen()
                            }
                        }
                    }
                }
            }
        }
    }
})
radio.setGroup(1)
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
strip.setBrightness(255)
basic.showIcon(IconNames.Yes)
basic.pause(2000)
basic.clearScreen()
control.inBackground(function () {
    for (let index = 0; index < 100000000000000000000; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Violet))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        basic.pause(200)
    }
})
