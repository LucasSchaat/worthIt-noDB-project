//Stock price data as of EOD 06/26/19; initial price as of 12/31/18 

const stockData = [
    {
        ticker: 'NKE',
        name: 'Nike, Inc.',
        price: 82.55,
        exchange: 'NYSE',
        chart: '/images/NKE.png',
        initialPurchasePrice: 74.14,
        priceChange: 8.41,
        sharesOwned: 135,
        initialInvestment: 10008.90,
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
        initialPurchasePrice: 120.00,
        priceChange: 42.10,
        sharesOwned: 100,
        initialInvestment: 12000.00,
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
        initialPurchasePrice: 93.15,
        priceChange: 17.01,
        sharesOwned: 150,
        initialInvestment: 13972.50,
        totalInvested: 13972.50,
        capGain: 2551.50,
        newShares: 0
    },
    {
        ticker: 'NSANY',
        name: 'Nissan Motor Co.',
        price: 14.51,
        exchange: 'Other OTC',
        chart: '/images/NSANY.png',
        initialPurchasePrice: 15.94,
        priceChange: -1.43,
        sharesOwned: 100,
        initialInvestment: 1594.00,
        totalInvested: 1594.00,
        capGain: -143.00,
        newShares: 0
    },
    {
        ticker: 'SPOT',
        name: 'Spotify Technology',
        price: 144.79,
        exchange: 'NYSE',
        chart: '/images/SPOT.png',
        initialPurchasePrice: 113.50,
        priceChange: 31.29,
        sharesOwned: 450,
        initialInvestment: 51075,
        totalInvested: 51075,
        capGain: 14080.50,
        newShares: 0
    },
    
]

const accountTotal = 9515.25

module.exports = {
    stockData,
    accountTotal
}