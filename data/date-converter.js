const fs = require('fs');

let rawdata = fs.readFileSync('./data/prices.json');
let prices = JSON.parse(rawdata);

for (const price of prices) {
    price['ts'] = new Date(price['timestamp']).getTime()
}

fs.writeFile('./data/prices.json', JSON.stringify(prices), function (err) {
    if (err) throw err;
        console.log('Saved!');
});