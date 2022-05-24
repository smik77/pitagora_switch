function ソファ () {
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(370, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
}
input.onButtonPressed(Button.A, function () {
    status = 0
    Aメロ()
    for (let index = 0; index < 100; index++) {
        if (status == 1) {
            break;
music.stopAllSounds()
        }
        Bメロ()
    }
})
input.onGesture(Gesture.ThreeG, function () {
    status = 1
    basic.pause(3500)
    ピタゴラスイッチ音()
})
function ソラ () {
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
}
function Aメロ () {
    レミ()
    レミ()
    ソファ()
    レミ()
    if (status == 1) {
        return
    }
    レミ()
    レミ()
    ドシ()
    ソラ()
    if (status == 1) {
        return
    }
    レミ()
    レミ()
    ソファ()
    レミ()
    if (status == 1) {
        return
    }
    前半しめ()
    if (status == 1) {
        return
    }
}
input.onButtonPressed(Button.B, function () {
    status = 1
    basic.pause(3500)
    ピタゴラスイッチ音()
})
function ドシ () {
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
}
function レミ () {
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
}
function 前半しめ () {
    music.playTone(247, music.beat(BeatFraction.Quarter))
    music.playTone(220, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(247, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(277, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
}
function ピタゴラスイッチ表示 () {
    basic.showLeds(`
        # . . # #
        # # # # #
        # . . . .
        # . . . .
        . # # # #
        `)
    if (status == 1) {
        return
    }
    basic.pause(300)
    basic.showLeds(`
        . # # # .
        . # . . #
        # . # # #
        . . . . #
        . # # # .
        `)
    if (status == 1) {
        return
    }
    basic.pause(300)
    basic.showLeds(`
        . . . # #
        # # # # .
        . . . # .
        . . . # .
        # # # # .
        `)
    if (status == 1) {
        return
    }
    basic.pause(300)
    basic.showLeds(`
        . # # # .
        . . . . .
        # # # # #
        . . . . #
        . # # # .
        `)
    if (status == 1) {
        return
    }
    basic.pause(300)
    basic.showLeds(`
        # # # # .
        . . . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    if (status == 1) {
        return
    }
    basic.pause(300)
    basic.showLeds(`
        . . . . #
        . . # # .
        # # # . .
        . . # . .
        . . # . .
        `)
    if (status == 1) {
        return
    }
    basic.pause(300)
    basic.showLeds(`
        . . . . .
        # . # . #
        # . # . #
        . . . . #
        . # # # .
        `)
    if (status == 1) {
        return
    }
    basic.pause(300)
    basic.showLeds(`
        . # # # .
        . . # . .
        # # # # #
        . . # . .
        . # . . .
        `)
    if (status == 1) {
        return
    }
    basic.pause(300)
}
function ピタゴラスイッチ音 () {
    for (let index = 0; index < 2; index++) {
        レミ()
    }
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
}
function Bメロ () {
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    if (status == 1) {
        return
    }
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(370, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(370, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Quarter))
    if (status == 1) {
        return
    }
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(247, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    if (status == 1) {
        return
    }
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(247, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Quarter))
    if (status == 1) {
        return
    }
    music.playTone(247, music.beat(BeatFraction.Half))
}
function Pi_finish (数値: number) {
    led.setBrightness(数値)
    basic.showLeds(`
        # . . # #
        # # # # #
        # . . . .
        # . . . .
        . # # # #
        `)
}
let status = 0
status = 0
led.setBrightness(150)
let list = [
20,
80,
180,
255
]
basic.forever(function () {
    if (status == 0) {
        ピタゴラスイッチ表示()
    } else {
        for (let 値 of list) {
            Pi_finish(値)
        }
    }
})
