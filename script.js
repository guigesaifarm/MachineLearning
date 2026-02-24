function playVideo(videoId){

const videos = document.querySelectorAll("video");

videos.forEach(video => {
video.pause();
video.currentTime = 0;
});

const selected = document.getElementById(videoId);
selected.play();

}
