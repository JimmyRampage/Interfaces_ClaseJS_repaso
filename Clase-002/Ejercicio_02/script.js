'use strict'

let subjects = ["Lenguaje de marcas", "Diseño Interfaces"]

// Selectores
let btn = document.getElementById("btn-save")
let input = document.getElementById("input-text")
let list = document.getElementById("list")

// Eventos
btn.addEventListener("click", () => {
  subjects.push(input.value)
  input.value = ""
  listSubjects()
})

// funciones
const listNames = () => {
  cleanUl(list)
  names.forEach(name => {
    let li = document.createElement("li")
    li.textContent = name
    list.appendChild(li)
  })
}

const cleanUl = (ul) => {
  while(ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
}

window.onload = () => {
  listSubjects()
}