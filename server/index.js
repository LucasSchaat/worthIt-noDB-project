require('dotenv').config({ path: __dirname + '/../.env'})
const express = require('express')
const sc = require('./controllers/stockCtrl')
const { SERVER_PORT } = process.env

const app = express()
app.use(express.json())

app.post('/api/portfolio/add', sc.buyNewStock)
app.get('/api/portfolio', sc.currentPortfolio)
app.put('/api/portfolio/:ticker', sc.updateShareCount)
app.delete('/api/portfolio/:ticker', sc.deleteStock)


app.listen(SERVER_PORT, () => {
    console.log(`Server is now live on Port: ${SERVER_PORT}`)
})