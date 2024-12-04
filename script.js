function changeVideo(videoFile) {
    const videoPlayer = document.getElementById('video-player');
    videoPlayer.src = 'videos/' + videoFile;
    videoPlayer.load();
    videoPlayer.play();
}
