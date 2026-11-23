// Declaración de la variable w (worker)
var w;

function inicio() {
    console.log('Llamado a inicio()');
    // Toma del sitio web aquel selector (etiqueta), cuyo
    // nombre es "resultado"
    const x = document.getElementById("resultado");
    console.log(x);
    // Creación del worker
    if (typeof(Worker) !== "undefined"){
        console.log('Estoy en validación del worker en el navegador');
        // Si el navegador soporta web worker, se procede a
        // su creación
        console.log("Resultado de la validación, de si puede crear el worker", (typeof(w) == "undefined"))
        if (typeof(w) == "undefined"){
            w = new Worker("./js/demo_worker.js");
            console.log(w);
        }
        // Se lee el mensaje de respuesta que genera el web worker
        w.onmessage = function(event){
            console.log(event)
            x.innerHTML = event.data;
        }
    }else{
        console.log('Estoy en que el navegador no soporta worker.');
        // Si el navegador no soporta web worker, se genera el
        // error que se indica a continuación
        x.innerHTML = "ERROR: El navegador web, no soporte Web Worker.";
    }
}

function fin(){
    console.log('Llamado a fin');
    // Termina la ejecución del worker
    w.terminate();
    // Inicializa el valor del objeto worker
    w = undefined;
}
