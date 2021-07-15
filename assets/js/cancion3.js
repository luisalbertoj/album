const audio = new Audio('./../assets/canciones/the-mills-el-beso-que-no-diste-con-letra-hdmp4.mp3');
const btn = document.getElementById("play");
const btnTest = document.getElementById("btnTest");
const test = document.getElementById("test");
const nombre = document.getElementById("nombre");
const album = document.getElementById("album");
const ano = document.getElementById("ano");
const compositor = document.getElementById("compositor");
const duracion = document.getElementById("duracion");

const cargarDatos = () => {
    if (localStorage.getItem("nombre") && localStorage.getItem("album")
        && localStorage.getItem("album") && localStorage.getItem("compositor")
        && localStorage.getItem("duracion")) {
        test.className = "col-sm-2 text-white visible";
        nombre.innerHTML = localStorage.getItem("nombre") || "Sin datos";
        album.innerHTML = localStorage.getItem("album") || "Sin datos";
        ano.innerHTML = localStorage.getItem("album") || "Sin datos";
        compositor.innerHTML = localStorage.getItem("compositor") || "Sin datos";
        duracion.innerHTML = localStorage.getItem("duracion") || "Sin datos";
    }
}

const validacion = (dato, clave) => {
    if (dato === "" || !dato) return 0;
    if (clave === "album" && dato.toLowerCase() !== "guadalupe") return 0;
    if (clave === "ano" && dato !== "2011") return 0;
    if (clave === "compositor" && dato.toLowerCase() !== "the mills") return 0;
    if (clave === "duracion" && dato !== "3:20") return 0;
    localStorage.setItem(clave, dato);
    return 1;
}

cargarDatos();


btn.onclick = function () {
    if (audio.paused) {
        audio.play();
        btn.className = "boton-reproducir turn";
    } else {
        audio.pause();
        btn.className = "boton-reproducir";
    }
}
btnTest.onclick = function () {
    if (!validacion(prompt("Ingresa tu nombre"), "nombre"))
        return alert("Debes ingresar un dato valido");
    if (!validacion(prompt("Ingresa el nombre del album"), "album"))
        return alert("El album no es correcto");
    if (!validacion(prompt("Ingresa el año del album"), "ano"))
        return alert("El año no es correcto");
    if (!validacion(prompt("Ingresa el nombre del compositor"), "compositor"))
        return alert("El compositor no es correcto");
    if (!validacion(prompt("Ingresa la duracion de la cancion"), "duracion"))
        return alert("la duracion no es correcta");
    cargarDatos();
}
