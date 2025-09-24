'use strict'

let subjects = ["Lenguaje de marcas", "Diseño Interfaces"]

// Selectores
let btnAdd = document.getElementById("btn-save")
let btnDel = document.getElementById("btn-delete")
let input = document.getElementById("input-text")
let list = document.getElementById("list")

// Eventos
btnAdd.addEventListener("click", () => {
  subjects.push(input.value)
  input.value = ""
  listSubjects()
})

btnDel.addEventListener("click", () => {
  let msj = "Seguro que quieres eliminar " + subjects[subjects.length - 1] + "?"
  if (confirm(msj)) {
    subjects.pop()
    listSubjects()
    alert("Eliminado")
  } else {
    alert("No eliminado")
  }
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