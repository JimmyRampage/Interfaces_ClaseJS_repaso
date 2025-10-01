'use strict'

// Eventos
// Son funciones que se ejecutan cuando ocurre algo
// click, mouseover, mouseout, keydown, keyup, load, etc

// Eventos del ratón

const btn = document.getElementById('btnColor')
const changeBtnColor = () => {
  let color = btn.style.backgroundColor

  if (color === 'blue') {
    btn.style.backgroundColor = 'red'
  } else {
    btn.style.backgroundColor = 'blue'
  }
}

btn.addEventListener('click', changeBtnColor)

// Evento mouseover
btn.addEventListener('mouseover', () => {
  btn.style.backgroundColor = 'green'
})

// Evento mouseout
btn.addEventListener('mouseout', () => {
  btn.style.backgroundColor = 'yellow'
})

// Eventos focus y blur
let input = document.getElementById('inputName')

input.addEventListener('focus', () => {
  input.style.backgroundColor = 'lightblue'
})

input.addEventListener('blur', () => {
  input.style.backgroundColor = 'lightgray'
})

// Evento keydown
input.addEventListener('keydown', (event) => {
  console.log('Tecla presionada: ', event.key)
})

// Evento Keypress (obsoleto, no usar)
input.addEventListener('keypress', (event) => {
  console.log('Tecla presionada: ', event.key)
})

// Evento keyup
input.addEventListener('keyup', (event) => {
  console.log('Tecla liberada: ', event.key)
})
