const fs = require('fs');

let rawdata = fs.readFileSync('./data/raw-bands.json');
let bands = JSON.parse(rawdata);

for (const band of bands) {
    band['ts'] = band['ts'] + (5 * 60 * 1000)
}

fs.writeFile('./data/bands.json', JSON.stringify(bands), function (err) {
    if (err) throw err;
        console.log('Saved!');
});