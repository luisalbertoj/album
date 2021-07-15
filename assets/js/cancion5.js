const audio = new Audio('https://dl.dropboxusercontent.com/s/w5211tlegof3vpo/y2mate.com_-_SIN_TI_SIN_MI_THE_MILLS_LETRA.mp3?dl=0');
const btn = document.getElementById("play-button");
const disc = document.getElementById("disc");
let test = document.getElementById("test");
let nombreC = document.getElementById("nombreCancion");
let nombreA = document.getElementById("nombreAlbum");
let anoA = document.getElementById("año");
let nombreCo = document.getElementById("nombreCompositor");
let tiempoC = document.getElementById("tiempoCancion");


const ingresarDatos = () => {
    let nombreUsuario = prompt("Ingrese su nombre pls");
    if (nombreUsuario == null) {
        validarStorage();
    } else {
        nombre.innerHTML = "Nombre: " + nombreUsuario;
        localStorage.setItem('nombre', nombreUsuario);
    }
};

const empezarTest = () => {
    let nombreCancion = prompt("1. Pregunta: Cual es el nombre de la cancion?");
    if (nombreCancion == null) {
        validarStorage();
    } else {
        if (nombreCancion === "Sin ti, sin mi") {
            alert("Muy bien!");
            nombreC.innerHTML = "Nombre cancion: " + nombreCancion;
            localStorage.setItem('nombreC', nombreCancion);

            let nombreAlbum = prompt("2. Pregunta: A que album pertenece la cancion?");
            if (nombreAlbum == null) {
                validarStorage();
            } else {
                if (nombreAlbum === "Guadalupe") {
                    alert("Muy bien!");
                    nombreA.innerHTML = "Nombre album: " + nombreAlbum;
                    localStorage.setItem('nombreA', nombreAlbum);

                    let anoAlbum = prompt("3. Pregunta: Cual fue el año de lanzamiento de la cancion?");

                    if (anoAlbum == null) {
                        validarStorage();
                    } else {
                        if (anoAlbum === "2014") {
                            alert("Muy maquina!");
                            anoA.innerHTML = "Año album: " + anoAlbum;
                            localStorage.setItem('anoA', anoAlbum);

                            let compositorCancion = prompt("4. Pregunta: Cual fue el compositor de la cancion? (Alias)");
                            if (compositorCancion == null) {
                                validarStorage();
                            } else {
                                if (compositorCancion === "Bako") {
                                    alert("Muy maquina!");
                                    nombreCo.innerHTML = "Nombre compositor: " + compositorCancion;
                                    localStorage.setItem('nombreCo', compositorCancion);

                                    let tiempoCancion = prompt("5. Pregunta: Cuanto dura la cancion? (Alias)");
                                    if (tiempoCancion == null) {
                                        validarStorage();
                                    } else {
                                        if (tiempoCancion === "3:37") {
                                            alert("Completaste el test con exito! Pasasteeee");
                                            tiempoC.innerHTML = "Duracion cancion: " + tiempoCancion;
                                            localStorage.setItem('tiempoC', tiempoCancion);
                                        } else {
                                            alert("Vuelve a intentarlo");
                                        }
                                    }
                                } else {
                                    alert("Vuelve a empezar crack")
                                }
                            }
                        } else {
                            alert("Muy malito")
                        }
                    }
                } else {
                    alert("Casi, vuelve a intentarlo")
                }
            }
        } else {
            alert("Malisimo")
        }
    }
};

const validarStorage = () => {
    if (localStorage.getItem("nombreC")) {
        nombreC.innerHTML = "Nombre: " + localStorage.getItem("nombreC");
    } else {
        nombreC.innerHTML = "Nombre: " + "Sin datos";
    }

    if (localStorage.getItem("nombreA")) {
        nombreA.innerHTML = "Album: " + localStorage.getItem("nombreA");
    } else {
        nombreA.innerHTML = "Album: " + "Sin datos";
    }

    if (localStorage.getItem("anoA")) {
        anoA.innerHTML = "Año: " + localStorage.getItem("anoA");
    } else {
        anoA.innerHTML = "Año: " + "Sin datos";
    }

    if (localStorage.getItem("nombreCo")) {
        nombreCo.innerHTML = "Compositor: " + localStorage.getItem("nombreCo");
    } else {
        nombreCo.innerHTML = "Compositor: " + "Sin datos";
    }

    if (localStorage.getItem("tiempoC")) {
        tiempoC.innerHTML = "Tiempo: " + localStorage.getItem("tiempoC");
    } else {
        tiempoC.innerHTML = "Tiempo: " + "Sin datos";
    }
}

validarStorage();


test.onclick = function() {
    empezarTest();
};

btn.onclick = function() {
    if (audio.paused) {
        audio.play();
        disc.className = "disc-img turn";

    } else {
        audio.pause();
        disc.className = "disc-img";

    }
}