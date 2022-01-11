let nbre_pas = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(nbre_pas)
})
input.onButtonPressed(Button.AB, function () {
    nbre_pas = 0
})
input.onButtonPressed(Button.B, function () {
    if (nbre_pas < 8000) {
        basic.showString("Encore un effort...")
    } else {
        basic.showString("BRAVO")
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.Shake) || input.isGesture(Gesture.LogoDown)) {
        nbre_pas += 1
    }
})
