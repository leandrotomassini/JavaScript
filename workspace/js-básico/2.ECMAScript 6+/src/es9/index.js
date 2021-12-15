const obj = {
  name: "Leandro",
  age: "28",
  country: "AR",
};

let { country, ...all } = obj;

console.log(all);

const obj2 = {
  name: "Leandro",
  age: "28",
};

const obj3 = {
  ...obj,
  country: "arg",
};

console.log(obj3);

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true ? resolve("Hello world") : reject(new Error("Test error"));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalizo"));

const regexData = /([0-9]{4}) - ([0-9]{2}) - ([0-9]{2}) /;
const match = regexData.exec("2018-04-20");

const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);






