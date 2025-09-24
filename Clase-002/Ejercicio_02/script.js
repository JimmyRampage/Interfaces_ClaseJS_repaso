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

const listSubjects = () => {
  list.innerHTML = ""
  subjects.forEach(sb => {
    let li = document.createElement("li")
    li.textContent = sb
    list.appendChild(li)
  })
}

window.onload = () => {
  listSubjects()
}