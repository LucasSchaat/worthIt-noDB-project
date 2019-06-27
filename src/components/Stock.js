import React, {Component} from 'react'

class Stock extends Component {
    constructor(props) {
        super()
    }

    render() {
        let { stock } = this.props

        return (
            <div>
                <div>
                    <div>{`${stock.name}  (${stock.ticker})`}</div>
                    <div>{stock.exchange}</div>
                    <div>{`$${Number(stock.price).toFixed(2)}`}</div>
                    <img className='stockChart' src={stock.chart} alt='Stock chart'/>
                    <div>{`Shares Owned: ${stock.sharesOwned}`}</div>
                    <div>{`Capital Gains: $${Number(stock.capGain).toFixed(2)}`}</div>
                </div>
            </div>
        )
    }
}

export default Stock
