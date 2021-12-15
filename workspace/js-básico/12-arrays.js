var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

console.log(frutas);

console.log(frutas.length);

var masFrutas = frutas.push("Limón");

console.log(frutas);

console.log(frutas.length);


var ultimo = frutas.pop("Limón");

console.log(frutas);

var nuevaLongitud = frutas.unshift("Frutilla");

console.log(frutas);

var borrarFruta = frutas.shift("Frutilla");

console.log(frutas);

var posicion = frutas.indexOf("Cereza");
console.log(posicion);