'use strict'

let caja = document.getElementById('caja');
console.log(caja);

// añadir valor desde JS
caja.innerHTML = 'Hola desde JS';

// cambiar estilo desde JS
caja.style.background = 'blue';
caja.style.padding = '20px';
caja.style.color = 'white';
caja.className = 'hola hola2';

// Podemos añadir clases
caja.classList.add('otraClase');

// Otra manera de seleccionar elementos
// Similar a los selectores de CSS
// Devuelve el primer elemento que coincida con el selector
let cajaQuery = document.querySelector('#caja');
console.log(cajaQuery);

// Devuelve todos los elementos que coincidan con el selector
let cajas = document.querySelectorAll('.blue');
console.log(cajas);

// Seleccionar por etiqueta
let todosLosDivs = document.getElementsByTagName('div');
console.log(todosLosDivs);

// Seleccionar por clase
let todasLasCajas = document.getElementsByClassName('caja');
console.log(todasLasCajas);