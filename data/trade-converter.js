const fs = require('fs');

let rawdata = fs.readFileSync('./data/trades.json');
let trades = JSON.parse(rawdata);

for (const trade of trades) {
    trade['timeIn'] = trade['timeIn'] - 10800 * 1000;
    trade['timeOut'] = trade['timeOut'] - 10800 * 1000;
}

fs.writeFile('./data/trades.json', JSON.stringify(trades), function (err) {
    if (err) throw err;
        console.log('Saved!');
});