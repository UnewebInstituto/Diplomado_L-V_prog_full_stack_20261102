//Declaración del objeto canvas. Busca dentro del documento html
//una etiqueta que se llama "lienzo".
const lienzo = document.getElementById("lienzo");
//Se define el contexto de la imagen
const ctx = lienzo.getContext ("2d");
//Dibujar un recuadro, de color azul, en las coordenadas
//x=0, y=0, ancho = 100px y altura =100px
ctx.fillStyle='blue';
ctx.fillRect(0,0,100,100);
//Se define un arreglo de colores y otras variables
const color = ["red","green","yellow","purple","orange"];
var x = 100;//Se inicializa x en 100
var y = 100;//Se inicializa y en 100
var contador = 0;//Se inicializa contador en 100
while (contador < color.length){
    ctx.fillStyle=color[contador];
    ctx.fillRect(x,y,100,100);
    x = x + 100;
    y = y + 100;
    contador = contador + 1;
    }