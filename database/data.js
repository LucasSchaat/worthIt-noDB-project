//Stock price data as of EOD 06/26/19; initial price as of 12/31/18 

const stockData = [
    {
        ticker: 'NKE',
        name: 'Nike, Inc.',
        price: 82.55,
        exchange: 'NYSE',
        chart: '/images/NKE.png',
        initalPurchasePrice: 74.14,
        priceChange: 8.41,
        sharesOwned: 135,
        totalInvested: 10008.90,
        capGain: 1135.35,
        newShares: 0
    },
    {
        ticker: 'DATA',
        name: 'Tableau Software, Inc.',
        price: 162.10,
        exchange: 'NYSE',
        chart: '/images/DATA.png',
        initalPurchasePrice: 120.00,
        priceChange: 42.10,
        sharesOwned: 100,
        totalInvested: 12000.00,
        capGain: 4210.00,
        newShares: 0
    },
    {
        ticker: 'WMT',
        name: 'Walmart Inc.',
        price: 110.16,
        exchange: 'NYSE',
        chart: '/images/WMT.png',
        initalPurchasePrice: 93.15,
        priceChange: 17.01,
        sharesOwned: 150,
        totalInvested: 13972.50,
        capGain: 2551.50,
        newShares: 0
    }
    
]

module.exports = {
    stockData
}