const sometingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey');
        } else {
            reject('Whoops!');
        }
    });
};

sometingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const sometingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True')
            }, 200);
        } else {
            const error = new Error('Whoop!');
            reject(error);
        }
    });
}

sometingWillHappen2(sometingWillHappen, )
    .then(response => console.log(response))
    .catch(err => console.err(err));

Promise.all([sometingWillHappen2(), sometingWillHappen()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(err => {

    });