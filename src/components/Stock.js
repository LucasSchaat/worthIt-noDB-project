import React, {Component} from 'react'

class Stock extends Component {
    constructor(props) {
        super()
        this.state = {
            buyTrade: false,
            sellTrade: false,
            boughtShares: 0,
            soldShares: 0,
            newShares: props.stock.sharesOwned,
            totalInvestment: props.stock.totalInvested,
            accountBalance: props.accountTotal
        }
        this.flipEdit = this.flipEdit.bind(this)
        this.updateShares = this.updateShares.bind(this)
    }

    componentDidUpdate(prevProps) {
        if(prevProps.accountTotal !== this.props.accountTotal) {
            this.setState({ accountBalance: this.props.accountTotal })
        }
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
                    let newTotalInvested = this.state.totalInvestment - (this.props.stock.price * +this.state.soldShares)
                    let updatedBalance = this.state.accountBalance + (this.props.stock.price * +this.state.soldShares)
                    this.setState ({ newShares: newShareCount, totalInvestment: newTotalInvested, accountBalance: updatedBalance }, () => {
                        this.props.updateShareCount(this.state.newShares, this.props.stock.ticker, this.state.totalInvestment, this.state.accountBalance)
                    })
                } else if (this.state.soldShares > this.props.stock.sharesOwned) {
                    alert('Not Able to Sell More Than You Own - No Margin Trading!')
                } else {
                    let updatedBalance = this.state.accountBalance + (this.props.stock.price * +this.state.soldShares)
                    this.setState ({ accountBalance: updatedBalance }, () => {
                        this.props.sellAllShares(this.props.stock.ticker, this.state.accountBalance)
                    })
                }
            } else {
                alert('Input Value Not a Number!')
            }
        } else {
            if (Number.isInteger(+this.state.soldShares)) {
                let newShareCount = this.state.newShares + +this.state.boughtShares
                let newTotalInvested = this.state.totalInvestment + (this.props.stock.price * +this.state.boughtShares)
                let updatedBalance = this.state.accountBalance - (this.props.stock.price * +this.state.boughtShares)
                this.setState ({ newShares: newShareCount, totalInvestment: newTotalInvested, accountBalance: updatedBalance }, () => {
                    this.props.updateShareCount(this.state.newShares, this.props.stock.ticker, this.state.totalInvestment, this.state.accountBalance)
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
        let { buyTrade, sellTrade, boughtShares, soldShares, totalInvestment } = this.state

        return (
            <div className='stockInfo'>
                <div className='priceNameDisplay'>
                    <div className='nameDisplay'>
                        <div className='ticker'>{`${stock.name}  (${stock.ticker})`}</div>
                        <div className='exchange'>{stock.exchange}</div>
                    </div>
                    <div className='price'>{Number(stock.price).toLocaleString('en', {style:'currency', currency:'USD'})}</div>
                </div>
                <div>
                    <img className='stockChart' src={stock.chart} alt='Stock chart'/>
                    <div className='shares'>Shares Owned: {Number(this.state.newShares).toFixed(0)}</div>
                    
                    {/* SELL SHARES */}
                    <div className='buySellButtonsContainer'>
                        {sellTrade ? (
                            <div className='inputButtonArea'>
                                <button className='sellButton' name='sellTrade' onClick={e => this.updateShares(e.target.name)}>Submit Trade</button>
                                <input className='buySellInput' value={soldShares} onChange={this.handleChange} name='soldShares' />
                            </div>
                        ) : (
                            <button className='sellButton' name='sellTrade' onClick={e => this.flipEdit(e.target.name)}>Sell Shares</button>
                        )}
                        
                        {/* BUY SHARES */}
                        {buyTrade ? (
                            <div className='inputButtonArea'>
                                <input className='buySellInput' value={boughtShares} onChange={this.handleChange} name='boughtShares' />
                                <button className='buyButton' name='buyTrade' onClick={e => this.updateShares(e.target.name)}>Submit Trade</button>
                            </div>
                        ) : (
                            <button className='buyButton' name='buyTrade' onClick={e => this.flipEdit(e.target.name)}>Buy Shares</button>
                        )}
                    </div >
                    <div className='gainsAndInvestment'>
                        <div>{`Total Investment: ${Number(totalInvestment).toLocaleString('en', {style:'currency', currency:'USD'})}`}</div>
                        <div>{`Total Gains: ${Number(stock.capGain).toLocaleString('en', {style:'currency', currency:'USD'})}`}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Stock
