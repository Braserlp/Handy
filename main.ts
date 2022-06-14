enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    if (PoweredOff == 0) {
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
            if (EinstellungenFunkAktiv == 1) {
                if (EinstellungenFunkGruppenNummer > 1) {
                    EinstellungenFunkGruppenNummer += -1
                } else {
                    if (EinstellungenFunkGruppenNummer == 1) {
                        EinstellungenFunkGruppenNummer = 10
                    }
                }
            }
            if (EinstellungenInSeitenauswahl == 1) {
                if (EinstellungenSeite > 1) {
                    EinstellungenSeite += -1
                }
            }
        }
        if (MessengerAktiv == 1) {
            if (MessengerTastatur == 1) {
                MessengerBuchstabe += -1
            }
        }
    }
})
function Einstellungen () {
    EinstellungenSeite = 1
    EinstellungenInSeitenauswahl = 1
    MainMenuSeite = 0
    ImMainMenu = 0
    EinstellungenAktiv = 1
    EinstellungenFunkGruppenNummer = 0
}
input.onGesture(Gesture.Shake, function () {
    if (PoweredOff == 0) {
        if (EinstellungenAktiv == 1) {
            EinstellungenAktiv = 0
            MainMenuSeite = 2
            EinstellungenFunkAktiv = 0
            ImMainMenu = 1
            EinstellungenInSeitenauswahl = 0
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
    }
})
function PowerOff () {
    PoweredOff = 1
    ImMainMenu = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
input.onButtonPressed(Button.AB, function () {
    if (PoweredOff == 1) {
        MainMenuSeite = 1
        ImMainMenu = 1
        PoweredOff = 0
    }
    if (PoweredOff == 0) {
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
        if (EinstellungenAktiv == 1) {
            if (EinstellungenSeite == 1) {
                EinstellungenInSeitenauswahl = 0
                EinstellungenFunkAktiv = 1
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
                Messenger()
                ImMainMenu = 0
            }
            if (MainMenuSeite == 4) {
            	
            }
            if (MainMenuSeite == 5) {
                PowerOff()
            }
        }
        if (MessengerAktiv == 1) {
            MessengerTastatur = 1
            Messengerempfangen = 0
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
                Buchstabe3 = "B"
            }
            if (MessengerBuchstabe == 3) {
                Buchstabe4 = "C"
            }
            if (MessengerBuchstabe == 4) {
                Buchstabe5 = "D"
            }
            if (MessengerBuchstabe == 5) {
                Buchstabe6 = "E"
            }
            if (MessengerBuchstabe == 6) {
                Buchstabe7 = "F"
            }
            if (MessengerBuchstabe == 7) {
                Buchstabe8 = "G"
            }
            if (MessengerBuchstabe == 8) {
                Buchstabe9 = "H"
            }
            if (MessengerBuchstabe == 9) {
                Buchstabe10 = "I"
            }
            if (MessengerBuchstabe == 10) {
                Buchstabe11 = "J"
            }
            if (MessengerBuchstabe == 11) {
                Buchstabe12 = "K"
            }
            if (MessengerBuchstabe == 12) {
                Buchstabe13 = "L"
            }
            if (MessengerBuchstabe == 13) {
                Buchstabe14 = "M"
            }
            if (MessengerBuchstabe == 14) {
                Buchstabe15 = "N"
            }
            if (MessengerBuchstabe == 15) {
                Buchstabe16 = "O"
            }
            if (MessengerBuchstabe == 16) {
                Buchstabe17 = "P"
            }
            if (MessengerBuchstabe == 17) {
                Buchstabe18 = "Q"
            }
            if (MessengerBuchstabe == 18) {
                Buchstabe19 = "R"
            }
            if (MessengerBuchstabe == 19) {
                Buchstabe20 = "S"
            }
            if (MessengerBuchstabe == 20) {
                Buchstabe21 = "T"
            }
            if (MessengerBuchstabe == 21) {
                Buchstabe22 = "U"
            }
            if (MessengerBuchstabe == 22) {
                Buchstabe23 = "V"
            }
            if (MessengerBuchstabe == 23) {
                Buchstabe24 = "W"
            }
            if (MessengerBuchstabe == 24) {
                Buchstabe25 = "X"
            }
            if (MessengerBuchstabe == 25) {
                Buchstabe26 = "Y"
            }
            if (MessengerBuchstabe == 26) {
                Buchstabe27 = "Z"
            }
        }
    }
})
radio.onReceivedString(function (receivedString) {
    music.playTone(988, music.beat(BeatFraction.Whole))
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    if (PoweredOff == 0) {
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
            if (EinstellungenFunkAktiv == 1) {
                EinstellungenFunkGruppenNummer += 1
            }
            if (EinstellungenInSeitenauswahl == 1) {
                if (EinstellungenSeite < 2) {
                    EinstellungenSeite += 1
                }
            }
        }
        if (MessengerAktiv == 1) {
            if (MessengerTastatur == 1) {
                MessengerBuchstabe += 1
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
    ImMainMenu = 0
    MainMenuSeite = 0
    MessengerAktiv = 1
}
let Buchstabe27 = ""
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
let Messengerempfangen = 0
let RechnerZahl3 = 0
let RechnerZahl2 = 0
let RechnerZahl1 = 0
let RechnerAusgerechnet = 0
let MessengerBuchstabe = 0
let MessengerTastatur = 0
let MessengerAktiv = 0
let EinstellungenSeite = 0
let EinstellungenInSeitenauswahl = 0
let EinstellungenFunkGruppenNummer = 0
let EinstellungenFunkAktiv = 0
let EinstellungenAktiv = 0
let RechnerAuswahl3 = 0
let RechnerAuswahl3Aktiv = 0
let RechnerAuswahl2 = 0
let RechnerAuswahl2Aktiv = 0
let RechnerAuswahl1 = 0
let RechnerAuswahl1Aktiv = 0
let RechnerAktiv = 0
let PoweredOff = 0
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
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
        }
        if (MainMenuSeite == 5) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                # . . . #
                . # # # .
                `)
        }
    }
})
basic.forever(function () {
    if (EinstellungenInSeitenauswahl == 1) {
        if (EinstellungenSeite == 1) {
            basic.showLeds(`
                . # # # .
                # . . . #
                . . # . .
                . # . # .
                . . # . .
                `)
        }
        if (EinstellungenSeite == 2) {
            basic.showLeds(`
                . . # . .
                . # . # .
                . # . # .
                # # # # #
                # # # # #
                `)
        }
    }
})
basic.forever(function () {
    if (EinstellungenFunkAktiv == 1) {
        basic.showNumber(EinstellungenFunkGruppenNummer)
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
            radio.setGroup(EinstellungenFunkGruppenNummer)
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
