const rawData = require('../../database/data')
let data = rawData.stockData

module.exports = {
    currentPortfolio (req, res) {
        let currentPortfolio = data.filter(stock => stock.sharesOwned > 0)
        res.status(200).send(currentPortfolio)
    },
    
}