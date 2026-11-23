// Declaración de variables
console.log("Se declara e inicializa i", i);
var i = 0;

// Declaración de función
function contar(){
    // Se incrementa en 1 el valor i
    i = i + 1;
    console.log("Se incrementa i en 1", i);
    // Se envia en un mensaje el valor contenido en i
    postMessage(i);
    console.log("Se envía desde el worker el valor de i", i);
    // Se llama así misma la función contar() cada 1/2 segundo
    setTimeout("contar()", 500);
    console.log("Espera 1/2 segundo para repetir");
}

// 1er. Llamado a la función
console.log("Llama por primera vez a la función contar()");
contar();