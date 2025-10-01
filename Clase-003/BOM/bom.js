'use strict'

// BOM -> Browser Object Model (elementos del navegador)

// Definimos una funcion para ver el tamaño de la ventana
function getBom(){
  console.log('Ancho: ' + window.innerWidth);
  console.log('Alto: ' + window.innerHeight);
  // Podemos ver la url de la pagina
  console.log('URL: ' + window.location.href);
}

// Evento resize -> se ejecuta cuando cambiamos el tamaño de la ventana
window.addEventListener('resize', getBom);

// Podemos redirigir a otra pagina
function redirect(url){
  window.location.href = url;
}
// Abrir una nueva ventana
function openNewPage(url){
  // Abre una nueva ventana
  // '_blank' -> abre en una nueva pestaña
  // '_self' -> abre en la misma pestaña
  // '_parent' -> abre en la ventana padre
  // '_top' -> abre en la ventana principal

  window.open(url, '_blank');
}
// Podemos ver la fecha y hora del sistema
function getDate(){
  let fecha = new Date();
  console.log(fecha);
}