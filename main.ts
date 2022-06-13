enum RadioMessage {
    message1 = 49434
}
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
    if (EinstellungenAktiv == 1) {
        if (EinstellungenGruppenNummer > 1) {
            EinstellungenGruppenNummer += -1
        } else {
            if (EinstellungenGruppenNummer == 1) {
                EinstellungenGruppenNummer = 10
            }
        }
    }
    if (MessengerAktiv == 1) {
        if (MessengerTastatur == 1) {
            MessengerBuchstabe += -1
        }
    }
})
function Einstellungen () {
    EinstellungenGruppenPages = 1
    MainMenuSeite = 0
    ImMainMenu = 0
    EinstellungenAktiv = 1
}
input.onGesture(Gesture.Shake, function () {
    if (EinstellungenAktiv == 1) {
        EinstellungenAktiv = 0
        MainMenuSeite = 2
        ImMainMenu = 1
    }
    if (RechnerAktiv == 1) {
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
        RechnerAktiv = 0
        MainMenuSeite = 1
        ImMainMenu = 1
    }
    if (MessengerAktiv == 1) {
        MessengerAktiv = 0
        MainMenuSeite = 3
        ImMainMenu = 1
        ImMainMenu = 1
        MessengerTastatur = 0
        Messengerempfangen = 0
        MessengerBuchstabe = 1
    }
})
function Bluetooth () {
	
}
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
            Einstellungen()
            ImMainMenu = 0
        }
        if (MainMenuSeite == 3) {
            ImMainMenu = 0
            Messenger()
        }
        if (MainMenuSeite == 4) {
            Bluetooth()
        }
        if (MainMenuSeite == 5) {
        	
        }
    }
    if (MessengerAktiv == 1) {
        Messengerempfangen = 0
        MessengerTastatur = 1
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
radio.onReceivedString(function (receivedString) {
    music.playTone(988, music.beat(BeatFraction.Whole))
    basic.showString(receivedString)
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
    if (EinstellungenAktiv == 1) {
        EinstellungenGruppenNummer += 1
    }
    if (MessengerAktiv == 1) {
        if (MessengerTastatur == 1) {
            MessengerBuchstabe += 1
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
    ImMainMenu = 0
    MainMenuSeite = 0
    MessengerAktiv = 1
}
let Messengerempfangen = 0
let RechnerZahl3 = 0
let RechnerZahl2 = 0
let RechnerZahl1 = 0
let RechnerAusgerechnet = 0
let MessengerBuchstabe = 0
let MessengerTastatur = 0
let MessengerAktiv = 0
let RechnerAuswahl3 = 0
let RechnerAuswahl3Aktiv = 0
let RechnerAuswahl2 = 0
let RechnerAuswahl2Aktiv = 0
let RechnerAuswahl1 = 0
let RechnerAuswahl1Aktiv = 0
let RechnerAktiv = 0
let EinstellungenGruppenPages = 0
let EinstellungenGruppenNummer = 0
let EinstellungenAktiv = 0
let ImMainMenu = 0
let MainMenuSeite = 0
MainMenuSeite = 1
ImMainMenu = 1
EinstellungenAktiv = 0
EinstellungenGruppenNummer = 0
EinstellungenGruppenPages = 0
basic.forever(function () {
    if (ImMainMenu == 1) {
        if (MainMenuSeite == 1) {
            basic.showLeds(`
                . # . . .
                # # # . .
                . # . . .
                . . # # #
                . . . . .
                `)
        }
        if (MainMenuSeite == 2) {
            basic.showLeds(`
                . . . . .
                # # . # #
                . # # # .
                # # . # #
                . . . . .
                `)
        }
        if (MainMenuSeite == 3) {
            basic.showLeds(`
                . # # # .
                # # # # #
                # # # # #
                . # # # .
                # # . . .
                `)
        }
        if (MainMenuSeite == 4) {
            basic.showLeds(`
                # . # # .
                . # # . #
                . . # # .
                . # # . #
                # . # # .
                `)
        }
        if (MainMenuSeite == 5) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
        }
    }
})
basic.forever(function () {
    if (EinstellungenAktiv == 1) {
        basic.showNumber(EinstellungenGruppenNummer)
    }
})
basic.forever(function () {
    if (MessengerAktiv == 1) {
        if (MessengerTastatur == 1) {
            if (MessengerBuchstabe == 1) {
                basic.showString("A")
            }
            if (MessengerBuchstabe == 2) {
                basic.showString("B")
            }
            if (MessengerBuchstabe == 3) {
                basic.showString("C")
            }
            if (MessengerBuchstabe == 4) {
                basic.showString("D")
            }
            if (MessengerBuchstabe == 5) {
                basic.showString("E")
            }
            if (MessengerBuchstabe == 6) {
                basic.showString("F")
            }
            if (MessengerBuchstabe == 7) {
                basic.showString("G")
            }
            if (MessengerBuchstabe == 8) {
                basic.showString("H")
            }
            if (MessengerBuchstabe == 9) {
                basic.showString("I")
            }
            if (MessengerBuchstabe == 10) {
                basic.showString("J")
            }
            if (MessengerBuchstabe == 11) {
                basic.showString("K")
            }
            if (MessengerBuchstabe == 12) {
                basic.showString("L")
            }
            if (MessengerBuchstabe == 13) {
                basic.showString("M")
            }
            if (MessengerBuchstabe == 14) {
                basic.showString("N")
            }
            if (MessengerBuchstabe == 15) {
                basic.showString("O")
            }
            if (MessengerBuchstabe == 16) {
                basic.showString("P")
            }
            if (MessengerBuchstabe == 17) {
                basic.showString("Q")
            }
            if (MessengerBuchstabe == 17) {
                basic.showString("R")
            }
            if (MessengerBuchstabe == 18) {
                basic.showString("S")
            }
            if (MessengerBuchstabe == 19) {
                basic.showString("T")
            }
            if (MessengerBuchstabe == 20) {
                basic.showString("U")
            }
            if (MessengerBuchstabe == 21) {
                basic.showString("V")
            }
            if (MessengerBuchstabe == 22) {
                basic.showString("W")
            }
            if (MessengerBuchstabe == 23) {
                basic.showString("X")
            }
            if (MessengerBuchstabe == 24) {
                basic.showString("Y")
            }
            if (MessengerBuchstabe == 25) {
                basic.showString("Z")
            }
        }
    }
})
basic.forever(function () {
    if (MessengerAktiv == 1) {
        if (Messengerempfangen == 1) {
            radio.setGroup(EinstellungenGruppenNummer)
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
