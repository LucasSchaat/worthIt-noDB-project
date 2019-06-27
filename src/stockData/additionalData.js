//Stock price data as of EOD 06/26/19; initial price as of 12/31/18 

const stockData = [
    {
        ticker: 'NOT',
        name: 'Template',
        price: 110.16,
        exchange: 'NYSE',
        chart: '/images/WMT.png',
        initalPurchasePrice: 0,
        priceChange: 0,
        sharesOwned: 0,
        totalInvested: 0,
        capGain: 0,
        newShares: 0
    },
    {
        ticker: 'THIS',
        name: 'New',
        price: 110.16,
        exchange: 'NYSE',
        chart: '/images/WMT.png',
        initalPurchasePrice: 0,
        priceChange: 0,
        sharesOwned: 0,
        totalInvested: 0,
        capGain: 0,
        newShares: 0
    }
]

module.exports = {
    stockData
}