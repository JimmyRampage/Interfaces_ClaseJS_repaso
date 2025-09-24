'use strict'

let divisores = new Array();

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
  let number = input('Ingresa un número')
  let res;
  let titulo = document.getElementById('titulo');
  let lista = document.getElementById('lista');
  let i = 0;

  titulo.innerHTML = `Los divisores de ${number} son:`;

  while (i <= number) {
    res = number % i;
    if (res === 0) {
      divisores.push(i);
    }
    i++;
  }

  for (const divisor of divisores) {
    let li = document.createElement('li');
    li.innerHTML = `${number} / ${divisor} = ${number/divisor}`;
    lista.appendChild(li);
  }
}

window.onload = () => {
  main();
}