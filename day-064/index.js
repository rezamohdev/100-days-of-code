(function testAsyncError() {
    try {
        console.log("Function execution started");
        return Promise.reject(new Error("Something went wrong..."));
    } catch (err) {
        console.log(`Error ${err.name} with the message ${err.message} has occured, but we've handled it`);
    }
    console.log("Function execution completed successfully");
})();