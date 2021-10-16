function newFunction(name, age, country) {
  var name = name || "Leandro";
  var age = age || 28;
  var country = country || "AR";
  console.log(name, age, country);
}

// ES6
function newFunction2(name = "leandro", age = 28, country = "AR") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("Pepe", "40", "CO");

// Template literals

let hello = "Hello";
let world = "Wold";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;

// Multilínea

let lorem =
  "Lorem  sid aisudi syudis. Lorem  sid aisudi syudis" +
  "Lorem  sid aisudi syudisLorem  sid aisudi syudis";

let lorem2 = `Lorem  sid aisudi syudis. Lorem  sid aisudi syudis
Lorem  sid aisudi syudis. Lorem  sid aisudi syudis
Lorem  sid aisudi syudis. Lorem  sid aisudi syudis`;

console.log(lorem2);

// Desestructuración

let person = {
  name: "Leandro",
  age: 28,
  country: "AR",
};

console.log(person.age, person.name);

let { name, age } = person;
console.log(name, age);

let team1 = ["Leandro", "Yamy", "Chicho"];
let team2 = ["Pepe", "Coco", "Coca"];

let education = ["Catalina", ...team1, ...team2];

console.log(education);

{
  var global = "Global var";
}

{
  let globalLet = "Global let";
  console.log(globalLet);
}

const a = "b";
console.log(a);
// a = "c";

let nombre = "Leandro";
let edad = 28;

obj = { nombre: nombre, edad: edad };

obj2 = { nombre, edad };
console.log(obj2);

const names = [
  { name: "Leandro", age: 28 },
  { name: "Yamila", age: 28 },
];

let listOfNames = names.map(function (item) {
  console.log(item.name);
});

let listOfNames2 = names.map((item) => console.log(item.name));

const listOfNames3 = (name, age) => {};

const listOfNames4 = (name) => {};

const square = (num) => num * num;

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Positivo");
    } else {
      reject("Negativo");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }

  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

function* helloWorld() {
  if (true) {
    yield "Hello, ";
  }
  if (true) {
    yield "Wolrd";
  }
}

const generatorHello = helloWorld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

// ECMAScript 7
