var hello = 'Hello';
var hello = 'Hello +';
let world = 'Hello world';
let world = 'Hello';
const helloWorld = 'Hello world!';


console.log(hello);

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

const helloWorld = () => {
    globalVar = 'im global';
}

helloWorld();

console.log(globalVar);