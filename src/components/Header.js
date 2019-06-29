import React, {Component} from 'react'
import { stockData } from '../stockData/additionalData'

class Header extends Component {
    constructor() {
        super()
        this.state = {
            input: false,
            newTicker: '',
            newStockData: {}
        }
    }

    flipEdit = () => {
        this.setState({ input: !this.state.input})
    }

    buyNewStock = async () => {
        this.flipEdit()
        let newStock = stockData.find( stock => stock.ticker === this.state.newTicker)
        await this.setState({ newStockData: newStock, newTicker: ''})
        this.props.buyNewStock(this.state.newStockData)
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })
    }
    
    render() {
        let { input, newTicker } = this.state
        
        return (
            <div className='header'>
                <div className='searchBar'>
                    {input ? (
                            <div className='newStock'>
                                <button className='buyNewButton' onClick={this.buyNewStock}>Add Stock to Dashboard</button>
                                <input className='buyNewInput' value={newTicker} onChange={this.handleChange} name='newTicker' placeholder='Which stock?' />
                            </div>
                        ) : (
                            <button className='buyNewButton' onClick={this.flipEdit}>Buy a New Stock</button>
                    )}
                </div>
                <div className='links'>
                    <div className='headerLinks'>Investing</div>
                    <div className='headerLinks'>Cash Management</div>
                    <div className='headerLinks'>Recent News</div>
                    <div className='headerLinks'>Logout</div>
                </div>
            </div>
        )
    }
}

export default Header