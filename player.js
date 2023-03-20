
   const valores = window.location.search;

   //Mostramos los valores en consola:
   
   //Resultado:
   //producto=camiseta&color=azul&talla=s

   //Creamos la instancia
const urlParams = new URLSearchParams(valores);

//Accedemos a los valores
var video = urlParams.get('video');



window.addEventListener("load", (event) => {
   document.querySelector("#videoPlayer").src="."+video.replaceAll("_","/");
});