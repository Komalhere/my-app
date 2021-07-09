const muteButton = document.querySelector("#mute-button");

muteButton.addEventListener("click", () => {
    const enabled = myVideoStream.getAudioTracks()[0].enabled;
    if (enabled) 
    {
        myVideoStream.getAudioTracks()[0].enabled = false;
        html = `<i class="fas fa-microphone-slash" title="Unmute"></i>`;
        muteButton.classList.toggle("change-background");
        muteButton.innerHTML = html;
    } 
    else 
    {
        myVideoStream.getAudioTracks()[0].enabled = true;
        html = `<i class="fas fa-microphone" title="Mute"></i>`;
        muteButton.classList.toggle("change-background");
        muteButton.innerHTML = html;
    }
});