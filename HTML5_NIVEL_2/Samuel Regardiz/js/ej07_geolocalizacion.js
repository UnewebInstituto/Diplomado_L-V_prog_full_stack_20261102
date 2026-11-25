
var resultado = document.getElementById ("resultado")

function obtenerUbicacion() {
    if (navigator.geolocation){

        navigator.geolocation.getCurrentPosition(recibircoordenadas.recibirerror)
    }else{
        resultado.innerHTML= "error: el navegador no acepta la api de geolocalizacion"
    }
}

function recibircoordenadas (posicion){
    console.log(posicion);
    latitud = posicion.coords.latitude;
    longitud = posicion.coords.longitud
    resultado.innerHTML = "latitud" + latitud + ", longitud" + longitud;
}

function recibirError (error){
    Console.log (error) 
    switch (error.code){  
        case 1:
            resultado.innerHTML = "error: usuario.nego el acceso a la ubicacion";
        break;
        case 2
            resultado.innerHTML = "error: ubicacion no disponible";
        break;
        case 3:
            resultado.innerHTML = "error se exedio el limite de tiempo"
            break;
        default
        resultado.innerHTML = "error: desconocido"
        break;
    }

}