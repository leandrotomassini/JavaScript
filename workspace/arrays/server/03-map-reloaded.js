rta = false;
const numbers = [1, 2, 3, 3, 5];

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 === 0) {
        rta = true;
        break;
    }
}

console.log(rta);

const rta2 = numbers.some(item => item % 2 === 0);
console.log(rta2);