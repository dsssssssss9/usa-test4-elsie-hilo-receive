keyboard.kbEvent(KeyValue.key5, function () {
    Guess = 5
})
keyboard.kbEvent(KeyValue.key0, function () {
    Guess = 0
})
keyboard.kbEvent(KeyValue.key9, function () {
    Guess = 9
})
keyboard.kbEvent(KeyValue.key1, function () {
    Guess = 1
})
keyboard.kbEvent(KeyValue.key6, function () {
    Guess = 6
})
keyboard.kbEvent(KeyValue.key3, function () {
    Guess = 3
})
keyboard.kbEvent(KeyValue.key4, function () {
    Guess = 4
})
function Show_Button () {
    keyboard.setIndexColor(Guess, 0xff0000)
}
function Compare () {
    basic.showNumber(Guess)
    basic.pause(2000)
    if (Guess == Answer) {
        keyboard.vibrationMotor(OnOff.ON)
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Forever)
        basic.pause(100)
        keyboard.setIndexColor(Guess, 0x00ff00)
        basic.showIcon(IconNames.Yes)
        music.stopAllSounds()
        keyboard.vibrationMotor(OnOff.OFF)
        basic.pause(500)
        control.reset()
    } else {
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        basic.showIcon(IconNames.No)
    }
}
radio.onReceivedNumber(function (receivedNumber) {
    Answer = receivedNumber
    basic.showString("Guess 0 - 9")
    basic.pause(100)
})
keyboard.kbEvent(KeyValue.key7, function () {
    Guess = 7
})
keyboard.kbEvent(KeyValue.key8, function () {
    Guess = 8
})
keyboard.kbEvent(KeyValue.key2, function () {
    Guess = 2
})
keyboard.kbEvent(KeyValue.keydf, function () {
    Show_Button()
    basic.pause(100)
    Compare()
    basic.pause(1000)
})
let Answer = 0
let Guess = 0
radio.setGroup(42)
keyboard.setBrightness(128)
keyboard.showColor(0x000000)
basic.showLeds(`
    . # . . .
    # . # . .
    . . # . .
    . . . . .
    . . # . .
    `)
basic.forever(function () {
	
})
