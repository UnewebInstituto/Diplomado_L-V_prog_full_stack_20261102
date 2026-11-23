//Declaración de variable
var i = 0;
console.log("Se declara e inicializa i", i);
//Declaración de funcion
function contar() {
    //Se incrementa en 1 el valor de i
    i = i + 1;
    console.log("Se incrementa i en 1", i);
    //Se envia en un mensaje el valor contenido en i
    postMessage(i);
    console.log("Se envía desde el worker el valor de i", i);
    //Se llama asi misma la función contar() cada 1/2 seg
    setTimeout("contar()",500);
    console.log("Espera 1/2 seg para repetir");
    
}

//Primer llamado a la función
console.log("Llama por primera vez a la función contar()");
contar();