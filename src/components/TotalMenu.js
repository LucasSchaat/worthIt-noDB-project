import React, {Component} from 'react'

class TotalMenu extends Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <div className='menuContainer'>
                <div className='logoContainer'>
                    <img className='logo' src='/images/logo.png' alt='Worth.it Logo' />
                </div>
                <img className='menuImage' src='/images/andy.jpeg' alt='Profile User' />
                <div className='personName'>Andrew Bernard</div>
                <div className='nickname'>Andy "NardDog" Bernard</div>
                <div className='accountName'>Trust Fund</div>
                <div className='accountAmount'>{Number(this.props.accountTotal).toLocaleString('en', {style: 'currency', currency: 'USD'})}</div>
                <div className='accountName'>Capital Gains</div>
                <div className='accountAmount'>{Number(this.props.currentPortfolio.reduce((acc, current) => {
                    return acc = acc + current.capGain},0)).toLocaleString('en', {style:'currency', currency:'USD'})}
                </div>
                <div className='accountName'>Total Invested</div>
                <div className='accountAmount'>{Number(this.props.currentPortfolio.reduce((acc, current) => {
                    return acc += current.totalInvested},0)).toLocaleString('en', {style:'currency', currency:'USD'})}
                </div>
                <div className='netWorthBox'>
                    <div className='netWorth'>Total Net Worth</div>
                    <div className='netWorthAmount'>{Number(120000).toLocaleString('en', {style: 'currency', currency: 'USD'})}</div>
                </div>
            </div>
        )
    }
}

export default TotalMenu