
console.log ("se declara e inicializa i", i)
var i = 0

function contar(){

    i = i + 1;
    console.log("se incrementa i en 1", i);
    postMessage(i);
    console.log("se enviadesde el worker el valor de i", i);
    setTimeout("contar()", 500);
    console.log("espera 1/2 segundos para repetir");

}
console.log ("llama por primera vez a la funcion contar()");
contar();