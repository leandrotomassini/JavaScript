var x = 1;

{
    var x = 2;
    console.log(x);
}

console.log(x);

const anotherFunction = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
};
anotherFunction();