let boton1c4=document.getElementById("datosC4");
let c4nombre=document.getElementById("c4nombre");
let c4album=document.getElementById("c4album");
let c4anio=document.getElementById("c4anio");
let c4compositor=document.getElementById("c4compositor");
let c4tiempo=document.getElementById("c4tiempo");


//funcion de eventos
const ingresarDatos = ()=>{
    let nombreBanda = prompt("Ingrese su nombre de la banda").toLowerCase();
    let nombreAlbum = prompt("Ingrese nombre del album").toLowerCase();
    let anio = prompt("Ingrese año de lanzamiento").toLowerCase();
    let nombreCompsitor = prompt("Ingrese el nombre del compositor").toLowerCase();
    let Tiempo = prompt("Ingrese tiempo de duracion en minutos").toLowerCase();
    if(nombreBanda == null || nombreBanda === "" || nombreAlbum == null || nombreAlbum ==="" || anio == null || anio==="" || nombreCompsitor==null || nombreCompsitor ==="" || Tiempo ==null || Tiempo ===""){
      validarStorage();
    }else if(nombreBanda==="the mills" && nombreAlbum ==="guadalupe" && anio ==="2011" && nombreCompsitor === "bako" && Tiempo ==="4" ){

       c4nombre.innerHTML ="Nombre: " + nombreBanda;
       c4album.innerHTML ="Album: " + nombreAlbum;
       c4anio.innerHTML ="Año: " + anio;
       c4compositor.innerHTML="Compositor: " + nombreCompsitor;
       c4tiempo.innerHTML="Tiempo: " + Tiempo;

       localStorage.setItem('c4nombre',nombreBanda);
       localStorage.setItem('c4album',nombreAlbum);
       localStorage.setItem('c4anio',anio);
       localStorage.setItem('c4compositor',nombreCompsitor);
       localStorage.setItem('c4tiempo',Tiempo);

    }else{
        alert("algun valor no fue correcto, intentalo nuevamente");
    }
};

const validarStorage=()=>{
    if (localStorage.getItem('c4nombre')) {
        c4nombre.innerHTML = "Nombre del grupo musical : " + localStorage.getItem('c4nombre');

    } else{
        c4nombre.innerHTML = "Nombre del grupo musical : 'Sin datos'";
    }

    if (localStorage.getItem('c4album')) {
        c4album.innerHTML = "Nombre del album: " + localStorage.getItem('c4album');

    } else{
        c4album.innerHTML = "Nombre del album: 'Sin datos'";
    }
    if (localStorage.getItem('c4anio')) {
        c4anio.innerHTML = "año del lanzamiento: " + localStorage.getItem('c4anio');

    } else{
        c4anio.innerHTML = "año del lanzamiento : 'Sin datos'";
    }
    if (localStorage.getItem('c4compositor')) {
        c4compositor.innerHTML = "Nombre compositor : " + localStorage.getItem('c4compositor');

    } else{
        c4compositor.innerHTML = "Nombre compositor : 'Sin datos'";
    }
    if (localStorage.getItem('c4tiempo')) {
        c4tiempo.innerHTML = "Tiempo : " + localStorage.getItem('c4tiempo') + " minutos";

    } else{
        c4tiempo.innerHTML = "Tiempo : 'Sin datos'";
    }
};

validarStorage();
//evento 
boton1c4.onclick=function(){
    ingresarDatos();
};
