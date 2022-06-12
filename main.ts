input.onButtonPressed(Button.A, function () {
    if (MainMenuSeite > 1) {
        MainMenuSeite += -1
    }
})
input.onButtonPressed(Button.AB, function () {
    MainMenuSeite = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (MainMenuSeite == 1) {
        Rechner()
    }
    if (MainMenuSeite == 2) {
        Messenger()
    }
    if (MainMenuSeite == 3) {
    	
    }
    if (MainMenuSeite == 4) {
    	
    }
    if (MainMenuSeite == 5) {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    if (MainMenuSeite < 5) {
        MainMenuSeite += 1
    }
})
function Rechner () {
	
}
function Messenger () {
	
}
let MainMenuSeite = 0
MainMenuSeite = 1
basic.forever(function () {
    if (MainMenuSeite == 1) {
        basic.showLeds(`
            . # . . .
            # # # . .
            . # . . .
            . . # # #
            # . . . .
            `)
    }
})
basic.forever(function () {
    if (MainMenuSeite == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . # . . .
            `)
    }
})
basic.forever(function () {
    if (MainMenuSeite == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . # . .
            `)
    }
})
basic.forever(function () {
    if (MainMenuSeite == 4) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . # .
            `)
    }
})
basic.forever(function () {
    if (MainMenuSeite == 5) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . #
            `)
    }
})
