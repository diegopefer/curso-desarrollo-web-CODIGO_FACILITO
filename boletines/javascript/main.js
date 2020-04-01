//DOM
// let links = document.querySelectorAll("a");
//
// links.forEach(function(link){
//   console.log(link);
// });

// let celdas = document.querySelectorAll("td");
//
// celdas.forEach(function(td){
//   td.addEventListener('click',function(){
//     console.log(this);
//   });
// });

//obtener los elementos de la clase "close"

//recorrerlos

//agregar un evento click a cada uno de ellos
let cierres = document.querySelectorAll(".close");

cierres.forEach(function(cierre){
  cierre.addEventListener('click', function(e){
    e.preventDefault();//evita que el evento siga el comportamiento
    let content = document.querySelector('.content'); //ahora solo quiero un elemento

    // quitarle las clases de animacion
    content.classList.remove("fadeInDown");
    content.classList.remove("animated");

    // agregar clases para animar su salida
    content.classList.add("animated");
    content.classList.add("fadeOutUp");

    //redireccionar a la pagina anterior
    setTimeout(function(){
      location.href = "/boletines";
    },600); //1000 equivale a 1 seg. 1 seg = 1000 msg

    //setInterval igua que timeout pero las acciones se va a ejecutar cada segundo constantemente

    return false;
  });
});
