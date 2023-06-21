let audioElem = document.querySelector('audio')
let timeElem = document.querySelector('#time')

function playHandler () {
    audioElem.play()
    console.log('Play Shod :)');

    setInterval(function () {
        timeElem.innerHTML = '00:' + '0' + Math.floor(audioElem.currentTime)
    }, 1000);

}

function pauseHandler () {
    audioElem.pause()
    console.log('Pause Shod :)');
}

function durationHandler () {
    console.log('Duration:', audioElem.duration);
}

function playBackRateHandler () {
    audioElem.playbackRate = 2
    console.log('Music Speed: 2X');
}

function currentTimeHandler () {
    console.log('Current Time:', Math.floor(audioElem.currentTime));
}


// audioElem.play()
// audioElem.pause()
// audioElem.duration (مدت زمان) (second) 2 => 120s
// audioElem.currentTime (2) (70s)
// audioElem.playBackRate = 2   1x 1.5x 2x 3x 
