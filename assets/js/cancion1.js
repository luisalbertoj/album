const audio = new Audio('https://dl.dropboxusercontent.com/s/w5211tlegof3vpo/y2mate.com_-_SIN_TI_SIN_MI_THE_MILLS_LETRA.mp3?dl=0');
const btn = document.getElementById("play-button");
const disc = document.getElementById("disc");

btn.onclick = function() {
    if (audio.paused) {
        audio.play();
        disc.className = "disc-img turn";

    } else {
        audio.pause();
        disc.className = "disc-img";

    }
}