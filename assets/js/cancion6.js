let encuesta = document.getElementById("encuesta");
let nombre = document.getElementById("nombre");
let album = document.getElementById("album");
let lanzamiento = document.getElementById("lanzamiento");
let compositor = document.getElementById("compositor");
let tiempo = document.getElementById("tiempo");

const IngresarDatos = () => {

  let nombreUsuario = prompt("Ingrese su Nombre : ");
  if (nombreUsuario == null || nombreUsuario == "") {
    alert("Por favor ingrese su nombre correcto ");
    nombreUsuario = prompt("Ingrese su Nombre : ");
    validarEncuesta();
  } else {
    nombre.innerHTML = "Nombre : " + nombreUsuario;
    localStorage.setItem("nombre", nombreUsuario);
  }

  let albumUsuario = prompt("Ingrese Nombre del Album : ");
  if (
    albumUsuario == null ||
    albumUsuario == "" ||
    albumUsuario !=="Guadalupe"
  ) {
    alert("Por favor ingrese el nombre de album correcto : ");
    albumUsuario = prompt("Ingrese Nombre del Album : ");
    validarEncuesta()
  } else {
    album.innerHTML = "Album : " + albumUsuario;
    localStorage.setItem("album", albumUsuario);
  }

  let lanzamientoUsuario = prompt("Ingrese el año de lanzamiento : ");
  if (
    lanzamientoUsuario == null ||
    lanzamientoUsuario == "" ||
    lanzamientoUsuario !== "2011"
  ) {
    alert("El año de lanzamiento no es correcto vuelve a intentarlo");
    lanzamientoUsuario = prompt("Ingrese el año de lanzamiento : ");
    validarEncuesta();
  } else {
    lanzamiento.innerHTML = "Año lanzamiento : " + lanzamientoUsuario;
    localStorage.setItem("lanzamiento", lanzamientoUsuario);
  }

  let compositorUsuario = prompt("Ingrese compositor");
  if (compositorUsuario == null || compositorUsuario == "" || compositorUsuario !== "Bako" ) {
    alert("EL compositor no es correcto intenta de nuevo");
    compositorUsuario = prompt("Ingrese compositor");    
    validarEncuesta()
  } else {
    compositor.innerHTML = "Compositores : " + compositorUsuario;
    localStorage.setItem("compositor", compositorUsuario);
  }

  let tiempoUsuario = prompt("Ingresa tiempo de duracion");
  if (
    tiempoUsuario == null ||
    tiempoUsuario == "" ||
    tiempoUsuario !== "2:47"
  ) {
    alert("el tiempo de duracion es incorrecto vuelve a intentarlo");
    tiempoUsuario = prompt("Ingresa tiempo de duracion");
    validarEncuesta();
  } else {
    tiempo.innerHTML = "Tiempo duracion : " + tiempoUsuario;
    localStorage.setItem("tiempo", tiempoUsuario);
  }

};

const validarEncuesta = () => {

  if (localStorage.getItem("nombre")) {
    nombre.innerHTML = "Nombre : " + localStorage.getItem("nombre");
  } else {
    nombre.innerHTML = "Nombre : sin datos ";
  }

  if (localStorage.getItem("album")) {
    album.innerHTML = "album : " + localStorage.getItem("album");
  } else {
    album.innerHTML = "album : sin datos ";
  }

  if (localStorage.getItem("lanzamiento")) {
    lanzamiento.innerHTML = "lanzamiento : " + localStorage.getItem("lanzamiento");
  } else {
    lanzamiento.innerHTML = "año lanzamiento : sin datos ";
  }

   if (localStorage.getItem("compositor")) {
    compositor.innerHTML = "Compositores : " + localStorage.getItem("compositor");
  } else {
    compositor.innerHTML = "Compositores : sin datos ";
  }

  if (localStorage.getItem("tiempo")) {
    tiempo.innerHTML = "tiempo duracion : " + localStorage.getItem("tiempo");
  } else {
    tiempo.innerHTML = "Tiempo Duracion : sin datos ";
  }
};

validarEncuesta();

encuesta.onclick = function () {
  IngresarDatos();
};
