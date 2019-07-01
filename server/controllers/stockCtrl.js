const rawData = require('../../database/data')
let data = rawData.stockData
let accountTotal = rawData.accountTotal

module.exports = {
    currentPortfolio (req, res) {
        res.status(200).send({data, accountTotal})
    },
    updateShareCount(req, res) {
        let { ticker } = req.params
        let { updatedCount } = req.query
        let { updatedInvestment } = req.query
        let { updatedBalance } = req.query
        console.log('updatedBalance:', updatedBalance)
        accountTotal = updatedBalance
        console.log('accountTotal', accountTotal)
        let index = data.findIndex( stock => stock.ticker === ticker)
        data[index].sharesOwned = +updatedCount
        data[index].totalInvested = +updatedInvestment
        res.status(200).send({data, accountTotal})
    },
    deleteStock(req, res) {
        let { ticker } = req.params
        let { updatedBalance } = req.query
        accountTotal = updatedBalance
        let index = data.findIndex( stock => stock.ticker === ticker )
        index !== -1 && data.splice(index, 1)
        res.status(200).send({data, accountTotal})
    },
    buyNewStock(req, res) {
        let { stockData } = req.body
        data.push(stockData)
        res.status(200).send(data)
    }
    
}