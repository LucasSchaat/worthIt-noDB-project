const rawData = require('../../database/data')
let data = rawData.stockData

module.exports = {
    currentPortfolio (req, res) {
        res.status(200).send(data)
    },
    updateShareCount(req, res) {
        let { ticker } = req.params
        let { updatedCount } = req.query
        let index = data.findIndex( stock => stock.ticker === ticker)
        data[index].sharesOwned = +updatedCount
        res.status(200).send(data)
    },
    deleteStock(req, res) {
        let { ticker } = req.params
        let index = data.findIndex( stock => stock.ticker === ticker )
        index !== -1 && data.splice(index, 1)
        res.status(200).send(data)
    },
    buyNewStock(req, res) {
        let { stockData } = req.body
        data.push(stockData)
        res.status(200).send(data)
    }
    
}