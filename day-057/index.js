const http = require('http');
const fs = require('fs');
const { parseString } = require("xml2js");


const xml = `
<root>
  <child1>1</child1>
  <child2>2</child2>
</root>
`;

// const json = xml2json.parse(xml);

// console.log(json); // {"root":{"child1":"1","child2":"2"}}

fs.readFile('./data.xml', (err, data) => {
    let xmlData = '';

    if (err) {
        console.log(err);
        return;
    }
    parseString(xmlData, function (err, results) {

        // parsing to json
        let data = JSON.stringify(results)

        // display the json data
        // console.log("results", data);
        console.log('xml result ', data)
    })
    // console.log('data: ', data.json())
})

// const server = http.createServer((req, res) => {
//     let data = '';

//     req.on('data', (chunk) => {
//         data += chunk.toString();
//     });

//     req.on('end', () => {
//         console.log(JSON.parse(data));
//     });
// });

// server.listen(3000); 