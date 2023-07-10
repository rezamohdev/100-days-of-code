const express = require('express');
const path = require('path');
const routes = require('./routes');
const bodyParser = require('body-parser');

const { PORT = 3000, BASE_PATH } = process.env;

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ 'extended': true }))

app.use('/', routes);

app.listen(PORT, () => {
    console.log('Link to the server:');
    console.log(BASE_PATH);
});