import React, { Component } from 'react';
import { Lokka } from 'lokka';
import { Transport } from 'lokka-transport-http';
import numeral from 'numeral';

const client = new Lokka({
  transport: new Transport('/graphql')
});

const query = `
{
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
    client
      .query(query)
      .then(data => {
        this.setState({ loading: false, spotPrices: data.spotPrices });
      })
      .catch(error => {
        this.setState({ error, loading: true });
      });
  }

  state = {
    error: undefined,
    loading: true,
    spotPrices: []
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
