import React, {Component} from 'react'

class Stock extends Component {
    constructor(props) {
        super()
        this.state = {
            buyTrade: false,
            sellTrade: false,
            boughtShares: 0,
            soldShares: 0,
            newShares: props.stock.sharesOwned
        }
        this.flipEdit = this.flipEdit.bind(this)
        this.updateShares = this.updateShares.bind(this)
    }

    flipEdit(name) {
        this.setState ({ [name]: !this.state[name] })
    }

    updateShares(name) {
        this.flipEdit(name)
        if ( name === 'sellTrade' ) {
            if (Number.isInteger(+this.state.soldShares)) {
                if( this.state.soldShares < this.props.stock.sharesOwned) {
                    let newShareCount = this.state.newShares - +this.state.soldShares
                    this.setState ({ newShares: newShareCount }, () => {
                        this.props.updateShareCount(this.state.newShares, this.props.stock.ticker)
                    })
                } else if (this.state.soldShares > this.props.stock.sharesOwned) {
                    alert('Not Able to Sell More Than You Own - No Margin Trading!')
                } else {
                    this.props.sellAllShares(this.props.stock.ticker)
                }
            } else {
                alert('Input Value Not a Number!')
            }
        } else {
            if (Number.isInteger(+this.state.soldShares)) {
                let newShareCount = this.state.newShares + +this.state.boughtShares
                this.setState ({ newShares: newShareCount }, () => {
                    this.props.updateShareCount(this.state.newShares, this.props.stock.ticker)
                })
            } else {
                alert('Input Value Not a Number!')
            }
        }
    }
    
    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })
    }
    
    render() {
        let { stock } = this.props
        let { buyTrade, sellTrade, boughtShares, soldShares } = this.state
        
        return (
            <div>
                <div>
                    <div>{`${stock.name}  (${stock.ticker})`}</div>
                    <div>{stock.exchange}</div>
                    <div>{`$${Number(stock.price).toFixed(2)}`}</div>
                    <img className='stockChart' src={stock.chart} alt='Stock chart'/>
                    <div>Shares Owned: {this.state.newShares}</div>
                    
                    {/* SELL SHARES */}
                    {sellTrade ? (
                        <div>
                            <input value={soldShares} onChange={this.handleChange} name='soldShares' />
                            <button name='sellTrade' onClick={e => this.updateShares(e.target.name)}>Submit Trade</button>
                        </div>
                    ) : (
                        <button name='sellTrade' onClick={e => this.flipEdit(e.target.name)}>Sell Shares</button>
                    )}
                    
                    {/* BUY SHARES */}
                    {buyTrade ? (
                        <div>
                            <input value={boughtShares} onChange={this.handleChange} name='boughtShares' />
                            <button name='buyTrade' onClick={e => this.updateShares(e.target.name)}>Submit Trade</button>
                        </div>
                     ) : (
                        <button name='buyTrade' onClick={e => this.flipEdit(e.target.name)}>Buy Shares</button>
                    )}
                    
                    <div>{`Capital Gains: $${Number(stock.capGain).toFixed(2)}`}</div>
                </div>
            </div>
        )
    }
}

export default Stock
