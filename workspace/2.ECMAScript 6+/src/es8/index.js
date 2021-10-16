const data = {
  frontend: "Leandro",
  backend: "Yamila",
  design: "Chicho",
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const data2 = {
  frontend: "Leandro",
  backend: "Yamila",
  design: "Chicho",
};

const values = Object.values(data2);
console.log(values);
console.log(values.length);

const string = "Hello";
console.log(string.padStart(8, "hi "));
console.log(string.padEnd(12, " ----"));
console.log("food".padEnd(12, " -----"));

const obj = {
  name: "Leandro",
};

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello world"), 3000)
      : reject(new Error("Test Error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

const anotherFUnction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};


anotherFUnction();