// Write your JS code here
import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    const {cryptoCurrenciesData} = this.props

    return (
      <div className="app-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="cryptocurrency-img"
        />
        <div className="cryptocurrencies-list-container">
          <div className="list-header">
            <p className="list-coin-type-heading">Coin Type</p>
            <div className="value-container">
              <p className="list-coin-value">USD</p>
              <p className="list-coin-value">EURO</p>
            </div>
          </div>
          <ul className="cryptocurrencies-list">
            {cryptoCurrenciesData.map(eachCrypto => (
              <CryptocurrencyItem
                key={eachCrypto.id}
                cryptoCurrenciesDetails={eachCrypto}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
