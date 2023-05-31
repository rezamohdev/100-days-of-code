function promiseSequence(inputs, promiseMaker) {
    inputs = [...inputs];
    function handleNextInput(outputs) {
        if (inputs.length === 0) {
            return outputs;
        } else {
            let nextInput = inputs.shift();
            return promiseMaker(nextInput)
                .then(output => outputs.concat(output))
                .then(handleNextInput);
        }
    }
    return Promise.resolve([]).then(handleNextInput);
}

const inputs = [1, 2, 3];
const promiseMaker = (input) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(input * input);
        }, 1000);
    });
};

const result = promiseSequence(inputs, promiseMaker);
result.then(outputs => {
    console.log(outputs); // [1, 4, 9]
});