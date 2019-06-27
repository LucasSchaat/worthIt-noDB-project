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
            <div>
                <p>Header</p>
                {input ? (
                        <div>
                            <input value={newTicker} onChange={this.handleChange} name='newTicker' />
                            <button onClick={this.buyNewStock}>Add Stock to Dashboard</button>
                        </div>
                    ) : (
                        <button onClick={this.flipEdit}>Buy a New Stock</button>
                )}
            </div>
        )
    }
}

export default Header