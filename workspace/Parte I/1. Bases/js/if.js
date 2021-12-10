if (true) {
  console.log("Hola mundo verdadero.");
}

if (false) {
  console.log("Hola mundo falso.");
} else {
  console.log("Soy falso.");
}

if (true) {
  console.log("Hola mundo.");
} else if (false) {
  console.log("No");
} else {
  console.log("Final");
}

var edad = 19;

if (edad === 18) {
  console.log("Puedes votar, será tu 1ra votación.");
} else if (edad > 18) {
  console.log("Puedes votar de nuevo.");
} else {
  console.log("Aun no puedes votar.");
}

// Operador ternario
// condition ? true : false;

var numero = 1;

var resultado = numero === 1 ? "Sí soy un uno." : "No soy uno.";

console.log(resultado);

