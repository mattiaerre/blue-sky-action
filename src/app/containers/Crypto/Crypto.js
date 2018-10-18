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
    foregroundColor
    name
  }
}
`;

function renderPrice({ amount, color, foregroundColor, name }) {
  const formatted = numeral(amount).format('0,0.00');
  return (
    <div
      className="Price card"
      style={{
        backgroundColor: color,
        color: foregroundColor
      }}
    >
      <div className="card-body">
        <span>
          <span>$</span>
          <span>{formatted.split('.')[0]}</span>
          <span>.{formatted.split('.')[1]}</span>
        </span>
        <small>{name.toUpperCase()} PRICE</small>
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
    const { loading, spotPrices } = this.state;
    return (
      <div className={`row ${loading ? 'loading' : ''}`}>
        {spotPrices.map(spotPrice => (
          <div
            className="col-lg-3 col-md-6 col-sm-12 mb-4"
            key={spotPrice.code}
          >
            {renderPrice(spotPrice)}
          </div>
        ))}
      </div>
    );
  }
}

export default Crypto;
