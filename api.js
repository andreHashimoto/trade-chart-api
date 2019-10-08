var express = require('express')
var app = express()
const fs = require('fs');
var cors = require('cors');
app.use(cors())

app.get('/bands', function (req, res) {
    let {start, end} = req.query;

    let rawdata = fs.readFileSync('./data/bands.json');
    let bands = JSON.parse(rawdata);
    res.send(bands.filter(b => b.t >= start && b.t <= end))
})

app.get('/prices', function (req, res) {
    let {start, end} = req.query;

    let rawdata = fs.readFileSync('./data/prices.json');
    let prices = JSON.parse(rawdata);
    res.send(prices.filter(p => {
        p['ts'] = new Date(p['time_period_end']).getTime()
        return p.ts >= start && p.ts <= end
    }))
})

app.get('/trades', function (req, res) {
    let {start, end} = req.query;

    let rawdata = fs.readFileSync('./data/trades.json');
    let trades = JSON.parse(rawdata);
    res.send(trades.filter(t => {
        return t['timeIn'] >= start && t['timeOut'] <= end
    }))
})


// let page = req.query.page;

// let rawdata = fs.readFileSync('./data/bands.json');
// let bands = JSON.parse(rawdata);

// let chunks = [];
// let chunk = [];
// for (const [index, value] of bands.entries()) {
//     chunk.push(value);
//     if (index != 0 && index % 19 === 0) {
//         chunks.push(chunk)
//         chunk = []
//     } 
// }

// res.send(chunks[page])

app.listen(3000, () => console.log(`Trade chart data api running on 3000!`))
