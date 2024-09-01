/* Trabajo Práctico nro. 1 OpArt con Funciones y Ciclo For en p5-js
Link de youtube: https://youtu.be/xjRNUWipGUE

Derek Ruiz 
Legajo: 88321/1
Profesor: David Bideian
Comisión 3
*/

let referencia;
let cantX = 10;
let cantY = 10;
let colorState = true; // Variable para cambiar el estado de los colores
 
function preload() {
  referencia = loadImage('data/1000_F_298996465_FjkuaOBwnzmrsijFQZn0pE9XVltuoP2t.jpg');
}

function setup(){
  createCanvas (800, 400);  
 resetVariables(); 
}

function draw(){
  background(255, 0, 0);
  image(referencia, 0, 0, 400, 400);
  
  
  // Bloque de cod: 
  let col = dist(width/4, height/2, pmouseX, pmouseY);
  let maxD = dist(0, 0, width/4, height/2);
  let Blu = map(col, 0, maxD, 0, 255);
  
  //cambio de color según la posición mouseX y mouseY (aunque lo usé para modificar las formas de los círculos)
  for (let I = 0; I < 80; I++){
    fill(I * Blu / 300, 0, 100, 150);
  }
  //
  
  
  // Cuadrados
  let modX = 400 / cantX;
  let modY = 400 / cantY;
  for (let j = 0; j < cantY; j++) {
    for (let i = 0; i < cantX; i++) {
      if ((j + i) % 2 == 0) {
        if (colorState) {
          fill(0);
        } else {
          fill(255, 0, 0); // Nuevo color cuando colorState es falso
        }
      } else {
        if (colorState) {
          fill(255);
        } else {
          //fill(0, 0, 255); // Nuevo color cuando colorState es falso
        fill (dameunColorFrio());
      }
      }
      rect(400 + i * modX, j * modY, 40, 40);
    }
  }
  
  // Círculos
  for (let j = 0; j < cantY; j++) {
    for (let i = 0; i < cantX; i++) {
      if ((j + i) % 2 == 0) {
        fill(255);
      } else {
        fill(0); 
      }
      let circleSize = map(col, 0, maxD, 10, 40); // Ajuste del tamaño del círculo según la distancia al centro de la mitad izquierda
      ellipse(i*modX+420, j*modY+20, circleSize/2, circleSize/2);
    }
  }
}

function resetVariables() {
  cantX = 10;
  cantY = 10;
  colorState = true;
}

  function keyPressed() {  
      console.log(key, keyCode);
  if (key == 'r' || key == 'R') {
    resetVariables(); 
    // Llamar a redraw para actualizar la pantalla después del reinicio
    redraw();
  }
}

function mousePressed() {
  colorState = !colorState; // Cambia el estado del color al hacer clic
}

function dameunColorFrio (){ 
return color (0,0,60);
}
