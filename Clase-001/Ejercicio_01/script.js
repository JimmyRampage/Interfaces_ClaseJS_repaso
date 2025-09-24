'use strict';

let numUno, numDos;

const isNumeric = (number) => {
  return !isNaN(number);
}

const input = (msj) => {
  let _input = prompt(`${msj}`);
  if (isNumeric(_input) && _input > 0) {
    return parseInt(_input);
  } else {
    return null;
  }
}

const gtLtE = (valueOne, valueTwo) => {
  if (valueOne > valueTwo) {
    return 1; // x > y
  } else if (valueOne < valueTwo) {
    return -1; // x < y
  } else {
    return 0; // x = y
  }
}

const main = () => {
  numUno = input('Ingresa el primer número');
  numDos = input('Ingresa el segundo número');

  while((numUno == null || numDos == null)) {
    alert('Debes ingresar números válidos y mayores a cero');
    numUno = input('Ingresa el primer número');
    numDos = input('Ingresa el segundo número');
  }

  switch (gtLtE(numUno, numDos)) {
    case 1:
      alert(`El número ${numUno} es mayor que ${numDos}`);
      break;

    case -1:
      alert(`El número ${numUno} es menor que ${numDos}`);
      break;

    case 0:
      alert(`El número ${numUno} es igual que ${numDos}`);
      break;

    default:
      break;
  }
}

window.onload = () => {
  main();
}