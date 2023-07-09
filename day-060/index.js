app.get('/pokemon', (req, res) => {
    // make a mutable copy of our pokedex
    let result = pokemon;

    // filter out all pokemon that aren't of the desired type
    if (req.query.type) {
        result = result.filter(item => item.type === req.query.type)
    }

    // filter out all pokemon that aren't of the desired stage
    if (req.query.stage) {
        result = result.filter(item => item.stage === req.query.stage)
    }

    res.send(result);
});