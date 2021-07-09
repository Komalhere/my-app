const stopVideo = document.querySelector("#stopVideo");
stopVideo.addEventListener("click", () => {
    const enabled = myVideoStream.getVideoTracks()[0].enabled;
    if (enabled) {
        myVideoStream.getVideoTracks()[0].enabled = false;
        html = `<i class="fas fa-video-slash" title="Turn camera on"></i>`;
        stopVideo.classList.toggle("change-background");
        stopVideo.innerHTML = html;
    } else {
        myVideoStream.getVideoTracks()[0].enabled = true;
        html = `<i class="fas fa-video" title="Turn camera off"></i>`;
        stopVideo.classList.toggle("change-background");
        stopVideo.innerHTML = html;
    }
});