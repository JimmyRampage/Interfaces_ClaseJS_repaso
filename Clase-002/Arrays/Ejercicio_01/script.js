"user strict"

let subject = ["Lenguaje de marcas", "Despliegue", "BBDD"]

let inputSubject = prompt("ingresa una materia")

subject.push(inputSubject)

let length = subject.length

let inputNumber = parseInt(prompt("Ingresa un numero entre 0 y " + (length - 1)))

alert(subject[inputNumber])

let list = document.getElementById('list')

subject.forEach((sb, i) => {
  console.log(`${i}: ${sb}`)
});

const createList = () => {
  let i = 0;
  for (const item of subject) {
    let li = document.createElement('li')
    li.textContent = `Posicion: ${i++} | Materia: ${item}`
    list.appendChild(li)
  }
}

window.onload = () => {
  createList()
}