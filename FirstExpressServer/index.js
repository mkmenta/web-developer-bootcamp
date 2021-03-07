const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Welcome to my First Express Server!')
})

app.get('/r/:oneparam', (req, res) => {
    const { oneparam } = req.params
    res.send(`The ${oneparam} GET page.`)
})

app.post('/r/:oneparam', (req, res) => {
    const { oneparam } = req.params
    res.send(`The ${oneparam} POST page.`)
})

app.get('/search', (req, res) => {
    const { q } = req.query
    res.send(`Searching ${q}.`)
})

app.get('*', (req, res) => {
    res.send("I don't know that path!")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
