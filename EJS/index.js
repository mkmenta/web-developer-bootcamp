const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    res.render(`search`, { q, data: redditData[q] })
})

app.get('*', (req, res) => {
    res.send("I don't know that path!")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
