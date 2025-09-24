'use strict'

let names = ["Julia", "María", "Elena", "Ana", "Sonia"]

// Selectores
let btnAdd = document.getElementById("btn-save")
let btnDel = document.getElementById("btn-delete")
let input = document.getElementById("input-text")
let list = document.getElementById("list")

// Eventos
btnAdd.addEventListener("click", () => {
  names.push(input.value)
  input.value = ""
  listNames()
})

btnDel.addEventListener("click", () => {
  let name = input.value
  let i = names.indexOf(name)
  let msj = "Seguro que quieres eliminar " + name + "?"
  if (confirm(msj)) {
    names.splice(i, 1)
    listNames()
    alert("Eliminado")
  } else {
    alert("No eliminado")
  }
  input.value = ""
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
  listNames()
}