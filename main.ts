let punti = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showString("MADE BY THEDOOFMODERN :)")
})
input.onButtonPressed(Button.A, function () {
    basic.showString("FEEDING...")
    punti += 20
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (punti))
})
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
