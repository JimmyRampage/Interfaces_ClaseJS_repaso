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
├── style.css       # Estilos para el tablero y los controles
└── script.js       # Lógica del juego y manipulación del DOM
```

## Tecnologías Utilizadas

* HTML5: Para la estructura semántica del contenido.
* CSS3: Para el diseño y la apariencia visual del tablero.
* JavaScript (ES6+): Para toda la lógica interactiva del juego.

## 💡 Aprendizajes Clave

Durante el desarrollo de este proyecto, he reforzado y aprendido varios conceptos importantes de JavaScript y el desarrollo web:

* **Gestión Compleja de Eventos:**
  * Los elementos no interactivos como `<div>` no reciben eventos `focus` o `blur` a menos que se les añada el atributo `tabindex`.
  * Cómo el evento `mousedown` y `event.preventDefault()` son cruciales para evitar que un elemento (como un botón) "robe" el foco de otro (la celda seleccionada), solucionando problemas de interacción complejos.
* **Manejo de Estado:** La importancia de usar una variable global (`selectedCell`) para mantener el estado de la aplicación (saber qué celda está activa en todo momento) y cómo esto simplifica la lógica en los listeners.
* **Refactorización de Lógica:** Pasar de una larga cadena de `if-else` a una fórmula matemática (`(quadrantRow * 3) + quadrantCol + 1`) para determinar el cuadrante. Esto no solo reduce el código, sino que lo hace más legible y mantenible.
* **Separación de Responsabilidades (CSS vs. JS):** Identificar oportunidades para mover lógica de estilo (como los bordes gruesos) de JavaScript a CSS para un código más limpio y declarativo.

## Posibles Mejoras (To-Do)

Este proyecto tiene un gran potencial para crecer. Algunas ideas para futuras versiones son:

[ ] Generación de Puzzles: Implementar un algoritmo que genere puzzles de Sudoku válidos.
[ ] Niveles de Dificultad: Permitir al usuario elegir entre fácil, medio y difícil.
[ ] Validación de Reglas: Comprobar en tiempo real si un número introducido es válido (no se repite en la fila, columna o cuadrante).
[ ] Entrada por Teclado: Permitir al usuario introducir números usando el teclado numérico.
[ ] Botón de Borrar: Añadir un botón específico para borrar el contenido de una celda.
[ ] Temporizador: Añadir un cronómetro para medir el tiempo que se tarda en resolver el puzzle.
