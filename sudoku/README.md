# Sudoku con JavaScript Vanilla

Un sencillo juego de Sudoku interactivo construido puramente con HTML, CSS y JavaScript, sin necesidad de librerías o frameworks externos.

## Descripción

Este proyecto es una implementación de un tablero de Sudoku de 9x9. El objetivo principal era practicar la manipulación del DOM, la gestión de eventos y la lógica de programación en JavaScript. El tablero se genera dinámicamente y permite al usuario interactuar con las celdas para introducir números.

## Características

Tablero Dinámico: El tablero de 9x9 se genera completamente con JavaScript.
División por Cuadrantes: Las celdas están visualmente agrupadas en sus cuadrantes de 3x3 correspondientes.
Selección de Celda: Haz clic en una celda para seleccionarla. La celda activa se resalta para una mejor visibilidad.
Resaltado de Fila y Columna: Al seleccionar una celda, toda su fila y columna se resaltan para ayudar a identificar conflictos.
Controles de Números: Utiliza los botones numéricos para introducir o borrar un número en la celda seleccionada.
Accesibilidad Básica: Se puede navegar por las celdas utilizando la tecla Tab gracias al uso del atributo tabindex.

## Estructura del Proyecto

```plaintext
.
├── index.html      # Estructura principal de la página
└── assets/
    ├── css/
    │   └─ style.css       # Estilos para el tablero y los controles
    └── js/
        ├── script.js       # Lógica del juego y manipulación del DOM
        └── boardMaker.js   # Lógica para la creación y resolución del tablero (Sudoku Solver)
```

## Tecnologías Utilizadas

* HTML5: Para la estructura semántica del contenido.
* CSS3: Para el diseño y la apariencia visual del tablero.
* JavaScript (ES6+): Para toda la lógica interactiva del juego.

## 💡 Aprendizajes Clave

Durante el desarrollo de este proyecto, he reforzado y aprendido varios conceptos importantes de JavaScript y el desarrollo web:

* Algoritmos y Recursividad: Implementación del algoritmo de backtracking para generar soluciones de Sudoku, una técnica poderosa para resolver problemas de satisfacción de restricciones.
* Copias Superficiales vs. Profundas: Entender la diferencia crítica entre `[...array]` (copia superficial) y `structuredClone()` (copia profunda) al trabajar con arrays anidados para evitar la mutación no deseada del estado original.
* Gestión Compleja de Eventos:
  * Los elementos no interactivos como `<div>` no reciben eventos `focus` o `blur` a menos que se les añada el atributo `tabindex`.
  * Cómo el evento `mousedown` y `event.preventDefault()` son cruciales para evitar que un elemento (como un botón) "robe" el foco de otro (la celda seleccionada).
* Manejo de Estado: La importancia de usar una variable global (`selectedCell`) para mantener el estado de la aplicación (saber qué celda está activa en todo momento).
* Refactorización de Lógica: Pasar de una larga cadena de `if-else` a una fórmula matemática para determinar el cuadrante, haciendo el código más legible y mantenible.

### 🧠 Algoritmo de Resolución: Backtracking

La generación de un Sudoku válido y su resolución se basan en el algoritmo de backtracking, una técnica recursiva fundamental. Funciona de la siguiente manera:

1. Encontrar una celda vacía: El algoritmo busca la primera celda sin un número en el tablero. Si no encuentra ninguna, el tablero está resuelto (`caso base`).
2. Probar un número: Intenta colocar un número (del 1 al 9) en esa celda.
3. Validación: Comprueba si el número es válido según las reglas del Sudoku (no repetido en fila, columna o cuadrante 3x3).
4. Recursión:
    * Si el número es válido, lo coloca y se llama a sí mismo para resolver el resto del tablero.
    * Si esa llamada recursiva devuelve true (indicando que se encontró una solución completa), entonces este camino es correcto y se propaga el true hacia arriba.
5. Backtracking (Vuelta Atrás): Si el número no es válido, o si la llamada recursiva devuelve false (indicando que ese número no llevó a una solución), el algoritmo deshace el movimiento (borra el número de la celda) y prueba con el siguiente número disponible.
6. Fin: Si se han probado todos los números para una celda y ninguno lleva a una solución, la función devuelve false, indicando a la llamada anterior que debe hacer backtracking.

## Posibles Mejoras (To-Do)

Este proyecto tiene un gran potencial para crecer. Algunas ideas para futuras versiones son:

[ ] Generación de Puzzles: Implementar un algoritmo que genere puzzles de Sudoku válidos.
[ ] Niveles de Dificultad: Permitir al usuario elegir entre fácil, medio y difícil.
[ ] Validación de Reglas: Comprobar en tiempo real si un número introducido es válido (no se repite en la fila, columna o cuadrante).
[ ] Entrada por Teclado: Permitir al usuario introducir números usando el teclado numérico.
[ ] Botón de Borrar: Añadir un botón específico para borrar el contenido de una celda.
[ ] Temporizador: Añadir un cronómetro para medir el tiempo que se tarda en resolver el puzzle.
