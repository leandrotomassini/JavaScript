var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

console.log(frutas);

console.log(frutas.length);

console.log(frutas[0]);

console.log(frutas[2]);

// Añadir elementos al final del Array
var masFrutas = frutas.push("Uvas");
console.log(frutas);

console.log(frutas[4]);

// Eliminar el último elemento que contiene el Array
var ultimo = frutas.pop();
console.log(frutas);

// Agrega el elemento al inicio del Array
var nuevaLongitud = frutas.unshift("Uvas");
console.log(frutas);
console.log("Nueva longitud: " + nuevaLongitud);

// Borrar el primero
var borrarFruta = frutas.shift("Uvas");
console.log(frutas);

var posicion = frutas.indexOf("Cereza");
console.log(posicion);