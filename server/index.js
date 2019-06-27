require('dotenv').config({ path: __dirname + '/../.env'})
const express = require('express')
const sc = require('./controllers/stockCtrl')
const { SERVER_PORT } = process.env

const app = express()

app.get('/api/portfolio', sc.currentPortfolio)


app.listen(SERVER_PORT, () => {
    console.log(`Server is now live on Port: ${SERVER_PORT}`)
})