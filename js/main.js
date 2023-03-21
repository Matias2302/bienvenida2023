/*=====NAVBAR COLOR=====*/

$(function () {
	$(document).scroll(function () {
	  var $nav = $("header");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
  });

/*======================*/


/*function MostrarContenido(n){
    var contenido = document.getElementById("info").children;

    for (var i = 0; i < contenido.length; i++){
        contenido[i].style.display = (i === n - 1) ? "block" : "none";
    }
}*/

/*
var contenidoActual = 0;
function MostrarContenido(n) {
  var content = document.getElementById("info").children;
  var buttons = document.getElementsByClassName("media-element");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("selected");
  }
  buttons[n-1].classList.add("selected");
  content[contenidoActual].style.display = "none";
  content[n - 1].style.display = "block";
  contenidoActual = n - 1;
}*/

/*
var contenidoActual = 0;
function MostrarContenido(n) {
  var content = document.getElementById("info").children;
  var buttons = document.getElementsByClassName("media-element");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("selected");
  }
  buttons[n - 1].classList.add("selected");
  content[n - 1].style.display = "block";
  content[n - 1].classList.add("fade");
  
  
  setTimeout(function(){
    content[contenidoActual].classList.remove("fade");
    content[contenidoActual].style.display = "none";
    contenidoActual = n - 1;
  },1000);
  
}
*/

/*====Cambio url=====*/
/*
const items = document.querySelectorAll(".media-element");

items.forEach(function(item) {
  item.addEventListener("click", function() {
    const url = this.getAttribute("data-url");
    window.location.href = url;
  });
});
*/

/*===Contenido dinámico con trigger====*/
var contenidoActual = 0;

function MostrarContenido(n) {
  var content = document.getElementById("info").children;
  var buttons = document.getElementsByClassName("media-element");
  console.log(buttons);
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("selected");
  }
  buttons[n-1].classList.add("selected");
  content[contenidoActual].classList.remove("fade-in");
  content[contenidoActual].style.display = "none";
  content[n - 1].style.display = "block";
  content[n - 1].classList.add("fade-in");
  setTimeout(function(){
    content[contenidoActual].style.opacity = 0;
    content[n - 1].style.opacity = 1;
    contenidoActual = n - 1;
  },200);
}

window.onload = function() {
    MostrarContenido(1);
  };

///acordeón
let acordeones = Array.from(document.querySelectorAll(".acordeon"));

acordeones.map(function (acordeon) {
  const titulo = acordeon.querySelector(".acordeon__titulo");
  const contenido = acordeon.querySelector(".acordeon__contenido");
  titulo.addEventListener("click", function () {
    acordeon.className =
      acordeon.className === "acordeon"
        ? "acordeon acordeon--activo"
        : "acordeon";
    if (acordeon.className === "acordeon acordeon--activo") {
      contenido.style.height = contenido.scrollHeight + "px";
    } else {
        requestAnimationFrame(function(){
            contenido.style.height = "0px";
        });
      
    }
  });
});





