'use strict'

let names = ["James", "María", "Ikigai", "Alexander", "Elena"]

let list = document.getElementById("list")

names.forEach(name => {
  let li = document.createElement('li')
  li.textContent = name
  list.appendChild(li)
})