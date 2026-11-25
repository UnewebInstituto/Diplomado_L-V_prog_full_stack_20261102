var resultado = document.getElementById ("resultado")
var latitud, longitud; 



function obtenerUbicacion() {

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(recibirCoordenadas,recibirError);
    }else{
        resultado.innerHTML = "ERROR: el navegador no soporta la API de GEOLOCALIZACIÓN"
    }
}

function recibirCoordenadas(posicion){
        console.log(posicion)
        var latitud, longitud;  
        latitud = posicion.coords.latitude
        longitud = posicion.coords.longitud
        resultado.innerHTML = "latitud:" + latitud+ ", Longitud:" + longitud;

}

function recibirError(error){
        console.log(error)
        switch (error.code) {
            case 1:
                resultado.innerHTML= "error:Usuario nego el acceso a la ubicacion"
                break;

              case 2:   resultado.innerHTML= "error: ubicacion no disponible"
                break;

                case 3 : resultado.innerHTML= "error: se excedio del limite de tiempo"
                break;

            default: resultado.innerHTML= "error: Desconocido"
                
                break;
        }



}