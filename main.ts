let x = 0
input.onGesture(Gesture.Shake, function () {
    x = randint(0, 10)
    if (x == 0) {
        basic.showIcon(IconNames.Square)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.SmallSquare)
        music.play(music.tonePlayable(370, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (x == music.tonePlayable(262, music.beat(BeatFraction.Whole))) {
    	
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
basic.forever(function () {
	
})
