//Declaración de variable con el contenido de la etiqueta contenedor identificada como resultado.
var resultado = document.getElementById("resultado");
//Variables para obtener las coordenadas.
var latitud, longitud;

//Declaración de función para obtener la ubicación.
function obtenerUbicacion() {
    //Se verifica que el navegador soporta geolocalización.
    if(navigator.geolocation){
        //Si soporta la geolocalización, se llama a función getCurretPosition(), para proceder a obtener los datos.
        navigator.geolocation.getCurrentPosition(recibirCoordenadas,recibirError);

    }else{
        //No soporta la geolocalización
        resultado.innerHTML = "ERROR: El navegador no soporta la API de Geolocalización";
    }
}
function recibirCoordenadas(posicion) {
    console.log(posicion);
    latitud = posicion.coords.latitude;
    longitud = posicion.coords.longitud;
    resultado.innerHTML = "Latitud:" + latitud +",Longitud:" + longitud;
}
function recibirError(error) {
    console.log(error);
    switch (error.code) {
        case 1:
            resultado.innerHTML = "ERROR: Usuario negó el acceso a la ubicación.";
            break;
        case 2:
            resultado.innerHTML = "ERROR: Ubicación no disponible.";
            break;
        case 3:
            resultado.innerHTML = "ERROR: Se excedió del límite de tiempo.";
            break;
        default:
            resultado.innerHTML = "ERROR: Desconocido.";
            break;
    }
}