
        // declaracion del objeto canva. busca dentro del documento html una etiqueta que se llame lienzo
    const lienzo = document.getElementById ("lienzo")
    const ctx = lienzo.getContext("2d")
    ctx.fillStyle="blue";
    ctx.fillRect(0,0,100,100)
    const color = ["red","green","yellow","purple","orange"];
    var x = 100;
    var y = 100;
    var contador = 0;
    while (contador < color.length){
        ctx.fillStyle=color[contador];
        ctx.fillRect(x,y,100,100)
        x = x + 100;
        y = y + 100;
        contador = contador + 1;
  }
