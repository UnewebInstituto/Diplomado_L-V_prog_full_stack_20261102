
var w;

function inicio(){
    console.log("llamado a inicio");
    const x = document.getElementById("resultado");
    if (typeof(Worker) !== "undefined"){
        console.log("estoy en validacion del worker en el navegador")
        if(typeof(w) == "undefined"){
           w = new Worker("./js/demo_worker.js");
        }
        w.onmessage = function (event){
            x.innerHTML = event.data;    
        }
    }else{
        console.log("estoy en el navegador que no soporta worker ")
        x.innerHTML = "error el navegador web no soporte web worker"
    }
}

function fin(){

    w.terminate();

    w = undefined

}