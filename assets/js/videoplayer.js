var videoPlayer;
var playPauseButton;
var muteButton;
var progressBar;

function initVideoPlayer() {
    videoPlayer = document.getElementById("videoplayer");
    videoPlayer.controls = false;
    videoPlayer.addEventListener('timeupdate', updateProgressBar, false);


    playPauseButton = document.getElementById('play-pause-button');
    muteButton = document.getElementById('mute-button');
    progressBar = document.getElementById('progress-bar');


    videoPlayer.addEventListener('play', function () {
        var button = document.getElementById('play-pause-button');
        changeButtonType(button, 'pause');
    }, false);
    videoPlayer.addEventListener('pause', function () {
        var button = document.getElementById('play-pause-button');
        changeButtonType(button, play);
    }, false);

    videoPlayer.addEventListener('volumechange', function (e) {
        var button = document.getElementById('mute-button');
        if (videoPlayer.muted) changeButtonType(button, 'unmute');
        else changeButtonType(button, 'mute');
    }, false);

}

document.addEventListener("DOMContentLoaded", function () {
    initVideoPlayer();
}, false);

function togglePlayPause() {
    var button = document.getElementById("play-pause-button");
    if (videoPlayer.paused || videoPlayer.ended) {
        button.title = "pause";
        button.innerHTML = "pause";
        button.className = "pause";
        videoPlayer.play();
    } else {
        button.title = "play";
        button.innerHTML = "play";
        button.className = "play";
        videoPlayer.pause();
    }
}

function changeButtonType(button, value) {
    button.title = value;
    button.innerHTML = value;
    button.className = value;
}

function stopPlayer() {
    videoplayer.currentTime = 0;
    videoPlayer.pause();
}

function changeVolume(direction) {
    if (direction === '+') videoPlayer.volume += videoPlayer.volume == 1 ? 0 : 0.1;
    else videoPlayer.volume -= (videoPlayer.volume == 0 ? 0 : 0.1);
    videoPlayer.volume = parseFloat(videoPlayer.volume).toFixed(1);
}

function replayVideo() {
    resetPlayer();
    videoPlayer.play();
}

function toggleMute() {
    var button = document.getElementById('mute-button');
    if (videoPlayer.muted) {
        changeButtonType(button, 'mute');
        videoPlayer.muted = false;
    }
    else {
        changeButtonType(button, 'unmute');
        videoPlayer.muted = true;
    }
}

function resetPlayer() {
    videoPlayer.currentTime = 0;
    changeButtonType(playPauseButton, 'play');
}

function updateProgressBar() {
    var progressBar = document.getElementById('progress-bar');
    var percentage = Math.floor((100 / videoPlayer.duration) * videoPlayer.currentTime);
    progressBar.value = percentage;
    progressBar.innerHTML = percentage + '% played';
}

function resetPlayer() {
    progressBar.value = 0;
    videoPlayer.currentTime = 0;
    changeButtonType(playPauseButton, 'play');
}
