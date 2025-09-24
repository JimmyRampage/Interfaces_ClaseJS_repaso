'use strict';

let numbers = new Array();

const isNumeric = (number) => {
  return !isNaN(number);
}

const input = (msj) => {
  let _input = prompt(msj);
  if (isNumeric(_input) && _input > 0) {
    return parseInt(_input);
  } else {
    return null;
  }
}

const getSum = () => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const getAverage = () => {
  return numbers.length == 0 ? 0 : (getSum() / numbers.length).toFixed(2);
}

const main = () => {
  let number;

  alert('Ingresa números, deten cuando ingreses un número negativo u otro no numérico')
  do {
    number = input('Ingresa un número');
    if (number == null) {
      break;
    }
    numbers.push(number);
  } while (true);

  let suma = getSum();
  let promedio = getAverage();

  alert(`La suma de los números ingresados es: ${suma}`);
  alert(`El promedio de los números ingresados es: ${promedio}`);
}

window.onload = () => {
  main();
}