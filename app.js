const express = require('express')
const app = express()
const port = process.env.PORT
var bodyParser = require('body-parser')
require('dotenv').config()
app.use(bodyParser.json())

app.get('/', (req, res) => {
    try {
        res.send('Hello' + ' ' + process.env.NODE_ENV)
    } catch (error) {
        console.log(error);
    }
})

app.post('/getHello', (req ,res ,next) => {
    console.log(req.headers);
    const apiToken = '111111'
    if (req.headers.token !== apiToken) {
        res.status(401).send('Error token')
    }
    next()
}, (req, res) => {
    res.status(200).send('Hello')
})

app.listen(port, () => {
    try {
        console.log(`Example app listening on port ${port}`)
    } catch (error) {
        console.log(error);
    }
})