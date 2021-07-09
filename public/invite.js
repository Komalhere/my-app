const inviteButton = document.querySelector("#invite-button");
inviteButton.addEventListener("click", (e) => {
    prompt(
        "Send this link to your peer: ", window.location.href
    );
});