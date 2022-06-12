input.onButtonPressed(Button.A, function () {
    if (MainMenuSeite > 1) {
        MainMenuSeite += -1
    }
    if (RechnerAktiv == 1) {
        if (RechnerAuswahl1Aktiv == 1) {
            if (RechnerAuswahl1 > 0) {
                RechnerAuswahl1 += -1
            }
        } else {
            if (RechnerAuswahl2Aktiv == 1) {
                if (RechnerAuswahl2 > 1) {
                    RechnerAuswahl2 += -1
                }
            } else {
                if (RechnerAuswahl3Aktiv == 1) {
                    if (RechnerAuswahl3 > 0) {
                        RechnerAuswahl3 += -1
                    }
                }
            }
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (RechnerAktiv == 1) {
        if (RechnerAuswahl1Aktiv == 1) {
            RechnerZahl1 = RechnerAuswahl1
            RechnerAuswahl1Aktiv = 0
            RechnerAuswahl2Aktiv = 1
            RechnerAuswahl2 = 1
        } else {
            if (RechnerAuswahl2Aktiv == 1) {
                RechnerZahl2 = RechnerAuswahl2
                RechnerAuswahl2Aktiv = 0
                RechnerAuswahl3Aktiv = 1
            } else {
                if (RechnerAuswahl3Aktiv == 1) {
                    RechnerZahl3 = RechnerAuswahl3
                    RechnerAuswahl3Aktiv = 0
                    basic.showLeds(`
                        . . . . .
                        . # # # .
                        . . . . .
                        . # # # .
                        . . . . .
                        `)
                    basic.pause(1000)
                    if (RechnerZahl2 == 1) {
                        basic.showNumber(RechnerZahl1 + RechnerZahl3)
                    } else {
                        if (RechnerZahl2 == 2) {
                            basic.showNumber(RechnerZahl1 - RechnerZahl3)
                        } else {
                            if (RechnerZahl2 == 3) {
                                basic.showNumber(RechnerZahl1 * RechnerZahl3)
                            } else {
                                if (RechnerZahl2 == 4) {
                                    basic.showNumber(RechnerZahl1 / RechnerZahl3)
                                }
                            }
                        }
                    }
                    RechnerAusgerechnet = 1
                } else {
                    if (RechnerAusgerechnet == 1) {
                        RechnerAusgerechnet = 0
                        RechnerAuswahl1 = 0
                        RechnerAuswahl1Aktiv = 1
                        RechnerAuswahl2 = 0
                        RechnerAuswahl2Aktiv = 0
                        RechnerAuswahl3 = 0
                        RechnerAuswahl3Aktiv = 0
                        RechnerZahl1 = 0
                        RechnerZahl2 = 0
                        RechnerZahl3 = 0
                    }
                }
            }
        }
    }
    if (ImMainMenu == 1) {
        if (MainMenuSeite == 1) {
            Rechner()
            ImMainMenu = 0
        }
        if (MainMenuSeite == 2) {
            Messenger()
            ImMainMenu = 0
        }
        if (MainMenuSeite == 3) {
        	
        }
        if (MainMenuSeite == 4) {
        	
        }
        if (MainMenuSeite == 5) {
        	
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (MainMenuSeite < 5) {
        MainMenuSeite += 1
    }
    if (RechnerAktiv == 1) {
        if (RechnerAuswahl1Aktiv == 1) {
            RechnerAuswahl1 += 1
        } else {
            if (RechnerAuswahl2Aktiv == 1) {
                if (RechnerAuswahl2 < 4) {
                    RechnerAuswahl2 += 1
                }
            } else {
                if (RechnerAuswahl3Aktiv == 1) {
                    RechnerAuswahl3 += 1
                }
            }
        }
    }
})
function Rechner () {
    RechnerAktiv = 1
    RechnerAuswahl1Aktiv = 1
    RechnerAuswahl1 = 0
    RechnerAuswahl3 = 0
}
function Messenger () {
	
}
let RechnerAusgerechnet = 0
let RechnerZahl3 = 0
let RechnerZahl2 = 0
let RechnerZahl1 = 0
let RechnerAuswahl3 = 0
let RechnerAuswahl3Aktiv = 0
let RechnerAuswahl2 = 0
let RechnerAuswahl2Aktiv = 0
let RechnerAuswahl1 = 0
let RechnerAuswahl1Aktiv = 0
let RechnerAktiv = 0
let ImMainMenu = 0
let MainMenuSeite = 0
MainMenuSeite = 1
ImMainMenu = 1
basic.forever(function () {
    if (ImMainMenu == 1) {
        if (MainMenuSeite == 1) {
            basic.showLeds(`
                . # . . .
                # # # . .
                . # . . .
                . . # # #
                # . . . .
                `)
        }
    }
})
basic.forever(function () {
    if (ImMainMenu == 1) {
        if (MainMenuSeite == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . # . . .
                `)
        }
    }
})
basic.forever(function () {
    if (RechnerAktiv == 1) {
        if (RechnerAuswahl1Aktiv == 1) {
            basic.showNumber(RechnerAuswahl1)
        }
    }
})
basic.forever(function () {
    if (RechnerAktiv == 1) {
        if (RechnerAuswahl3Aktiv == 1) {
            basic.showNumber(RechnerAuswahl3)
        }
    }
})
basic.forever(function () {
    if (ImMainMenu == 1) {
        if (MainMenuSeite == 3) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . # . .
                `)
        }
    }
})
basic.forever(function () {
    if (RechnerAktiv == 1) {
        if (RechnerAuswahl2Aktiv == 1) {
            if (RechnerAuswahl2 == 1) {
                basic.showLeds(`
                    . . # . .
                    . . # . .
                    # # # # #
                    . . # . .
                    . . # . .
                    `)
            }
            if (RechnerAuswahl2 == 2) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # # # # #
                    . . . . .
                    . . . . .
                    `)
            }
            if (RechnerAuswahl2 == 3) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
            }
            if (RechnerAuswahl2 == 4) {
                basic.showLeds(`
                    . # # # .
                    . . . . .
                    # # # # #
                    . . . . .
                    . # # # .
                    `)
            }
        }
    }
})
basic.forever(function () {
    if (ImMainMenu == 1) {
        if (MainMenuSeite == 4) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . # .
                `)
        }
    }
})
basic.forever(function () {
    if (ImMainMenu == 1) {
        if (MainMenuSeite == 5) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . #
                `)
        }
    }
})
