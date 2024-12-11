function changeVideo(videoId) {
    // Pausar todos os vídeos
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.pause();
    });
    
    // Reproduzir o vídeo selecionado
    const videoPlayer = document.getElementById(videoId);
    videoPlayer.play();
}
