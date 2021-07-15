const audio = new Audio('./../assets/canciones/the-mills-el-beso-que-no-diste-con-letra-hdmp4.mp3');
const btn = document.getElementById("play");

btn.onclick = function() {
    if( audio.paused ) {
        audio.play();
        btn.className = "boton-reproducir turn";
    } else {
        audio.pause();
        btn.className = "boton-reproducir";
    }
}
