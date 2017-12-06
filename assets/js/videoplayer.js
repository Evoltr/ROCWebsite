var videoPlayer;

function initVideoPlayer() {
    videoPlayer = document.getElementById("videoplayer");
    videoPlayer.controls = false;
}

document.addEventListener("DOMContentLoaded", function() {
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
    videoPlayer.pause;
    videoplayer.currentTime = 0;
}

function changeVolume(direction) {
    if (direction === '+') videoPlayer.volume += videoPlayer.volume == 1 ? 0 : 0.1;
    else mediaPlayer.volume -= (videoPlayer.volume == 0 ? 0 : 0.1);
    videoPlayer.volume = parseFloat(videoPlayer.volume).toFixed(1);
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
