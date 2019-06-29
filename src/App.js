import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Stock from './components/Stock'
import Header from './components/Header'
import TotalMenu from './components/TotalMenu'
import Footer from './components/Footer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentPortfolio: [],
      accountTotal: 76121.75
    }
  }

  componentDidMount() {
    axios
      .get('/api/portfolio')
      .then( res => {
        this.setState({ currentPortfolio: res.data })
      })
  }

  updateShareCount = (sharesOwned, ticker, investment, accountBalance) => {
    axios
    .put(`api/portfolio/${ticker}?updatedCount=${sharesOwned}&updatedInvestment=${investment}`)
    .then( res => {
      this.setState({ currentPortfolio: res.data, accountTotal: accountBalance})
    })
    .catch( err => console.log('Error'))
  }

  sellAllShares = (ticker, accountBalance) => {
    axios
    .delete(`/api/portfolio/${ticker}`)
    .then(res => {
      this.setState({ currentPortfolio: res.data, accountTotal: accountBalance })
    })
    .catch(err => console.log('Error'))
  }

  buyNewStock = stockData => {
    axios
    .post('/api/portfolio/add', {stockData})
    .then(res => {
      this.setState({ currentPortfolio: res.data})
    })
    .catch(err => console.log('Error'))
  }

  render() {
    return (
      <div className="App">
        <div>
          <Header 
            buyNewStock={this.buyNewStock}
          />
        </div>
        <div className='mainContent'>
            <div className='totalMenu'>
              <TotalMenu 
                currentPortfolio={this.state.currentPortfolio}
                accountTotal={this.state.accountTotal}
              />
            </div>
          <div className='stockContainer'>
            {this.state.currentPortfolio.map( stock => {
              return (
                <Stock 
                  key={stock.ticker}
                  stock={stock}
                  updateShareCount={this.updateShareCount}
                  sellAllShares={this.sellAllShares}
                  accountTotal={this.state.accountTotal}
                />
              )
            })}
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
