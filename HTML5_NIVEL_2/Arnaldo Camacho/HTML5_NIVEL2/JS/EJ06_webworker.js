
var w;


function inicio(){
const x = document.getElementById("resultado")

    if (typeof(Worker) !== "undefined"){

            if (typeof(w) == "undefined"){
            w = new Worker("./JS/demo_worker.js");}

    }else{
        x.innerHTML = " error: el navegador no soporta web worker"
    }
    
    w.onmessage = function(event){
        document.getElementById("resultado").innerHTML= event.data;
        }
}


function fin(){

    w.terminate();
    w = undefined

}






