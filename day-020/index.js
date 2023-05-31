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

function elapsedTime(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// An async generator function that increments a counter and yields it
// a specified (or infinite) number of times at a specified interval.
async function* clock(interval, max = Infinity) {
    for (let count = 1; count <= max; count++) { // regular for loop
        await elapsedTime(interval);            // wait for time to pass
        yield count;                            // yield the counter
    }
}

// A test function that uses the async generator with for/await
async function test() {                       // Async so we can use for/await
    for await (let tick of clock(3, 1000)) { // Loop 100 times every 300ms
        console.log(tick);
    }
}
