const audio        = new Audio('https://dl.dropboxusercontent.com/s/mrdltmtuimoy3gf/mienteme.m4a?dl=0');
const btn          = document.getElementById("play-button");
const disc         = document.getElementById("disc");
const formSong     = document.getElementById("formSong");
const songName     = document.getElementById("songName");
const songAlbum    = document.getElementById("songAlbum");
const songYear     = document.getElementById("songYear");
const songComposer = document.getElementById("songComposer");
const songDuration = document.getElementById("songDuration");

const song = localStorage.getItem( 'song' ) ? JSON.parse( localStorage.getItem( 'song' ) ) : null;

if( song ) {
    songName.innerHTML     = song.name;
    songAlbum.innerHTML    = song.album;
    songYear.innerHTML     = song.year;
    songComposer.innerHTML = song.composer;
    songDuration.innerHTML = song.duration;
}

btn.onclick = function() {
    if( audio.paused ) {
        audio.play();
        disc.className = "disc-img turn";

    } else {
        audio.pause();
        disc.className = "disc-img";
        
    }
}

formSong.onsubmit = function( e ) {
    e.preventDefault();

    const formElements = formSong.elements;
    let errs = "";

    for( let input of formElements ) {
        
        const value = input.value.toLowerCase().trim();

        if( input.id === "c2Name" && value !== "mienteme" ) errs += "el nombre de la cancion ";
        if( input.id === "c2Album" && value !== "guadalupe" ) errs += "el nombre del album ";
        if( input.id === "c2Year" && value !== "2011" ) errs += "el año de creación ";
        if( input.id === "c2Composer" && value !== "alvaro charry" ) errs += "el nombre del compositor ";
        if( input.id === "c2Duration" && value !== "03:03" ) errs += "la duracion de la cancion ";

    }

    if( errs ) return alert("tienes los siguientes errores en " + errs);

    const objSong = {
        name     : "Miénteme",
        album    : "Guadalupe",
        year     : "2011",
        composer : "Alvaro Charry",
        duration : "03:03",
    };

    localStorage.setItem( "song", JSON.stringify( objSong ) );
    location.reload();
}
