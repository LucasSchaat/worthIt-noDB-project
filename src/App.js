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
      currentPortfolio: []
    }
  }

  componentDidMount() {
    axios
      .get('/api/portfolio')
      .then( res => {
        this.setState({ currentPortfolio: res.data })
      })
  }

  updateShareCount = (sharesOwned, ticker) => {
    axios
    .put(`api/portfolio/${ticker}?updatedCount=${sharesOwned}`)
    .then( res => {
      this.setState({ currentPortfolio: res.data})
    })
    .catch( err => console.log('Error'))
  }

  sellAllShares = ticker => {
    axios
    .delete(`/api/portfolio/${ticker}`)
    .then(res => {
      this.setState({ currentPortfolio: res.data })
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
        <div className='header'>
          <Header 
            buyNewStock={this.buyNewStock}
          />
        </div>
        <div className='mainContent'>
            <div className='totalMenu'>
              <TotalMenu />
            </div>
          <div className='stockContainer'>
            {this.state.currentPortfolio.map( stock => {
              return (
                <Stock 
                  key={stock.ticker}
                  stock={stock}
                  updateShareCount={this.updateShareCount}
                  sellAllShares={this.sellAllShares}
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
