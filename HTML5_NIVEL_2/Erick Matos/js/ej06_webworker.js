//Declaración de la variable w (worker)
var w;

function inicio() { 
    //Toma del sitio web aquel selector/etiqueta cuyo nombre es resultado
    const x = document.getElementById("resultado");
    if (typeof(Worker) !== "undefined"){
        //Si el navegador soporta web worker, se procede a su creación
        if(typeof(w) == "undefined"){
        w = new Worker("./js/demo_worker.js");
        }
         //Se lee el mensaje de respuesta que genera el web worker
        w.onmessage = function(event){
        console.log(event)
        x.innerHTML = event.data;
        }
    }else{
        //Si el navegador no soporta web worker, se genera el error que se indica a continuación
            x.innerHTML = "ERROR: El navegador web, no soporta Web Worker.";
        }
       
}

//Termina la ejecución del Worker
function fin() {
    w.terminate();
    //Inicializa el valor del objeto worker
    w = undefined;
}