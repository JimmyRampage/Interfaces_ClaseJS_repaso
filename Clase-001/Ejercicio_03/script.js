'use strict'

const isNumeric = (number) => {
  return !isNaN(number);
}

const input = (msj) => {
  let _input = prompt(msj);
  if (isNumeric(_input)) {
    return parseInt(_input);
  } else {
    return null;
  }
}

const main = () => {
  let numberOne, numberTwo;
  let lista = document.getElementById('lista');

  numberOne = input('Ingresa el primer número');
  numberTwo = input('Ingresa el segundo número');

  for (let i = numberOne; i <= numberTwo; i++) {
    let li = document.createElement('li');
    li.innerHTML = i;
    lista.appendChild(li);
  }
}

window.onload = () => {
  main();
}