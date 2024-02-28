// function videoUrl(url) {
//     document.getElementById("slider").src = url;
// };

let video = document.getElementById("slider");

const button1  = document.querySelector("#button1");
const button2  = document.querySelector("#button2");
const button3  = document.querySelector("#button3");

const text = document.querySelector("#texto");

button1.onclick = prueba1;
button2.onclick = prueba2;
button3.onclick = prueba3;



function prueba1 (){
    // button1.innerText = "el texto ha cambiado";
    video.src = ('./videos/videoSlider1.mp4');
    text.innerText = "Descubre las maravillas del masaje prenatal. Alivia el estres, mejora el sueño, y promueve el bienestar tanto para la mama, como para el bebe";
    
};

function prueba2 (){
    // button1.innerText = "el texto ha cambiado";
    video.src = ('./videos/videoSlider2.mp4');
    text.innerText = "Brindamos tratamientos de la mas alta calidad, y asesoria personalizada a nuestros pacientes, contando con profesionales en el area, orientado a mejorar su calidad de vida";
};

function prueba3 (){
    // button1.innerText = "el texto ha cambiado";
    video.src = ('./videos/videoSlider3.mp4');
    text.innerText = "Creemos firmemente que brindar una experiencia integral, asi como otorgar buenos resultados al paciente, sera nuestro diferenciador. Prueba ya nuestros servicios, y mantente en Calma";
};


function myFunction() {
    var navigation = document.getElementById("myTopnav");
    if (navigation.className === "topnav") {
      navigation.className += " responsive";
    } else {
      navigation.className = "topnav";
    }
  }