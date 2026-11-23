
console.log ( "se declara e inicializa a")
var i = 0;

function contar() {
  i = i + 1;
  console.log ("se incrementa u en 1");
  postMessage(i);
  console.log("se envia desde el worker el valor de i", i)
  setTimeout("contar()",500);
  console.log("espera1/2 segundo para repetir");
}
console.log("llama por primera vez a la funcion contar()");
contar();