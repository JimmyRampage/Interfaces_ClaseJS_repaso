// Crear un array
var miArray = ["Pepe", "Maria", "Juan"]

// no es necesario tener solo un dato
var miArrayMultiple = ["Pepe", 23, true, "Hola"]

// Saber longitud y guardar esa info

var quantityMiArray = miArray.length
var quantityMiArrayMultiple = miArrayMultiple.length

// Si queremos que desde consola nos introduzcan un valor y mostrar esta posicion.
var asignaturas = ["Lenguaje de marcas", "Despliegue", "BBDD"]

// agregar un elemento
miArray.push("Jimmy")

// eliminar un elemento
miArrayMultiple.pop()

// saber la posicion de un elemento
let position = miArray.indexOf("Jimmy")

// eliminando por posicion
miArray.splice(position)

// clonando info
let miArray2 = [...miArray]

