function dragstartHandler(ev) {
    /*
    Qué hacer cuando el usuario inicia el arrastre de la imagen
    */
   ev.dataTransfer.setData("text", ev.target.id);
}
function dropHandler(ev) {
    /*Qué hacer cuando se suelta la imagen
    */
   ev.preventDefault();
   const data = ev.dataTransfer.getData("text");
   ev.target.appendChild(document.getElementById(data));
    
}
function dragoverHandler(ev){
    /*
    Qué hacer cuando se arrastra la imagen sobre el
    contenedor objetivo
    */
   ev.preventDefault();
}