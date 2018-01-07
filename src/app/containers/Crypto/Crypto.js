import React, { Component } from 'react';
import numeral from 'numeral';
import client from '../client';

const query = `
query SpotPrices {
  spotPrices(currency: "USD") {
    amount
    code
    color
    currency
    name
  }
}
`;

function renderPrice(price) {
  const amount = numeral(price.amount).format('0,0.00');
  return (
    <div className="Price card" style={{ backgroundColor: price.color }}>
      <div className="card-body">
        <span>
          <span>$</span>
          <span>{amount.split('.')[0]}</span>
          <span>.{amount.split('.')[1]}</span>
        </span>
        <small>{price.name.toUpperCase()} PRICE</small>
      </div>
    </div>
  );
}

class Crypto extends Component {
  constructor(props) {
    super(props);
    this.fetchSpotPrices();
    this.timer = setInterval(this.fetchSpotPrices, 15 * 1000);
  }

  state = {
    error: undefined,
    loading: true,
    spotPrices: []
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  fetchSpotPrices = () => {
    client.query(query).then(data => {
      this.setState({ loading: false, spotPrices: data.spotPrices });
    });
  };

  render() {
    return (
      <div className={`row ${this.state.loading ? 'loading' : ''}`}>
        {this.state.error && (
          <div className="col-md-12">{this.state.error.message}</div>
        )}
        {this.state.spotPrices.map(element => (
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={element.code}>
            {renderPrice(element)}
          </div>
        ))}
      </div>
    );
  }
}

export default Crypto;
