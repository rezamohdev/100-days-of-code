const https = require("https");

// read the text content of the url and asynchronously pass it to the callback.
function getText(url, callback) {

    // Start a http GET request for the url
    request = https.get(url);

    request.on("response", response => {
        let httpStatus = response.statusCode;
    });
}