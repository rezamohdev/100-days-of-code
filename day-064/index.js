// Moved the code returning the promise with an error to an external function
function returnPromiseError() {
    return Promise.reject(new Error("Something went wrong..."));
}

(async function testAsyncAwaitError() {
    try {
        console.log("Function execution started");
        await returnPromiseError(); // wait till returnPromiseError() is executed
    } catch (err) {
        console.error(`${err.name} with the message ${err.message} has occured, but we've handled it`);
    }
    console.log("Function execution completed successfully");
})();

// (function testAsyncError() {
//     try {
//         console.log("Function execution started");
//         return Promise.reject(new Error("Something went wrong..."));
//     } catch (err) {
//         console.log(`Error ${err.name} with the message ${err.message} has occured, but we've handled it`);
//     }
//     console.log("Function execution completed successfully");
// })();