enum RadioMessage {
    message1 = 49434
}
input.onPinPressed(TouchPin.P3, function () {
    if (MessengerAktiv == 1) {
        if (MessengerTastatur == 1) {
            Nachricht = "" + Buchstabe1 + Buchstabe2 + Buchstabe3 + Buchstabe4 + Buchstabe5 + Buchstabe6 + Buchstabe7 + Buchstabe8 + Buchstabe9 + Buchstabe10 + Buchstabe11 + Buchstabe12 + Buchstabe13 + Buchstabe14 + Buchstabe15 + Buchstabe16 + Buchstabe17 + Buchstabe18 + Buchstabe19 + Buchstabe20 + Buchstabe21 + Buchstabe22 + Buchstabe23 + Buchstabe24 + Buchstabe25 + Buchstabe26
            radio.sendString(Nachricht)
        }
    }
})
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
        if (MessengerBuchstabe == 0) {
            Buchstabe1 = "_"
        }
        if (MessengerBuchstabe == 1) {
            Buchstabe2 = "A"
        }
        if (MessengerBuchstabe == 2) {
            Buchstabe2 = "B"
        }
        if (MessengerBuchstabe == 3) {
            Buchstabe3 = "C"
        }
        if (MessengerBuchstabe == 4) {
            Buchstabe4 = "D"
        }
        if (MessengerBuchstabe == 5) {
            Buchstabe5 = "E"
        }
        if (MessengerBuchstabe == 6) {
            Buchstabe6 = "F"
        }
        if (MessengerBuchstabe == 7) {
            Buchstabe7 = "G"
        }
        if (MessengerBuchstabe == 8) {
            Buchstabe8 = "H"
        }
        if (MessengerBuchstabe == 9) {
            Buchstabe9 = "I"
        }
        if (MessengerBuchstabe == 10) {
            Buchstabe10 = "J"
        }
        if (MessengerBuchstabe == 11) {
            Buchstabe11 = "K"
        }
        if (MessengerBuchstabe == 12) {
            Buchstabe12 = "L"
        }
        if (MessengerBuchstabe == 13) {
            Buchstabe13 = "M"
        }
        if (MessengerBuchstabe == 14) {
            Buchstabe14 = "N"
        }
        if (MessengerBuchstabe == 15) {
            Buchstabe15 = "O"
        }
        if (MessengerBuchstabe == 16) {
            Buchstabe16 = "P"
        }
        if (MessengerBuchstabe == 17) {
            Buchstabe17 = "Q"
        }
        if (MessengerBuchstabe == 18) {
            Buchstabe18 = "R"
        }
        if (MessengerBuchstabe == 19) {
            Buchstabe19 = "S"
        }
        if (MessengerBuchstabe == 20) {
            Buchstabe20 = "T"
        }
        if (MessengerBuchstabe == 21) {
            Buchstabe21 = "U"
        }
        if (MessengerBuchstabe == 22) {
            Buchstabe22 = "V"
        }
        if (MessengerBuchstabe == 23) {
            Buchstabe23 = "W"
        }
        if (MessengerBuchstabe == 24) {
            Buchstabe24 = "X"
        }
        if (MessengerBuchstabe == 25) {
            Buchstabe25 = "Y"
        }
        if (MessengerBuchstabe == 26) {
            Buchstabe26 = "Z"
        }
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
let RechnerAuswahl3 = 0
let RechnerAuswahl3Aktiv = 0
let RechnerAuswahl2 = 0
let RechnerAuswahl2Aktiv = 0
let RechnerAuswahl1 = 0
let RechnerAuswahl1Aktiv = 0
let RechnerAktiv = 0
let Buchstabe26 = ""
let Buchstabe25 = ""
let Buchstabe24 = ""
let Buchstabe23 = ""
let Buchstabe22 = ""
let Buchstabe21 = ""
let Buchstabe20 = ""
let Buchstabe19 = ""
let Buchstabe18 = ""
let Buchstabe17 = ""
let Buchstabe16 = ""
let Buchstabe15 = ""
let Buchstabe14 = ""
let Buchstabe13 = ""
let Buchstabe12 = ""
let Buchstabe11 = ""
let Buchstabe10 = ""
let Buchstabe9 = ""
let Buchstabe8 = ""
let Buchstabe7 = ""
let Buchstabe6 = ""
let Buchstabe5 = ""
let Buchstabe4 = ""
let Buchstabe3 = ""
let Buchstabe2 = ""
let Buchstabe1 = ""
let Nachricht = ""
let MessengerTastatur = 0
let MessengerAktiv = 0
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
            if (MessengerBuchstabe == 0) {
                basic.showString("_")
            }
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
