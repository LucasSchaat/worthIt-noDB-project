const rawData = require('../../database/data')
let data = rawData.stockData

module.exports = {
    currentPortfolio (req, res) {
        let currentPortfolio = data.filter(stock => stock.sharesOwned > 0)
        res.status(200).send(currentPortfolio)
    },
    updateShareCount(req, res) {
        let currentPortfolio = data.filter(stock => stock.sharesOwned > 0)
        let { ticker } = req.params
        let { updatedCount } = req.query
        let index = currentPortfolio.findIndex( stock => stock.ticker === ticker)
        currentPortfolio[index].sharesOwned = +updatedCount
        res.status(200).send(currentPortfolio)
        console.log(updatedCount)
    }
    
}