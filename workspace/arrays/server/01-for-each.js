const letters = ['a', 'b', 'c'];

for (let index = 0; index < letters.lenght; index++) {
    const element = array[index];
    console.log('for', element);
}

letters.forEach(item => console.log('for each', item));