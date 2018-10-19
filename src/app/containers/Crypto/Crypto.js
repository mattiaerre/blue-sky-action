import PropTypes from 'prop-types';
import React, { Component } from 'react';
import client from '../client';
import renderPrice from './renderPrice';

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

class Crypto extends Component {
  constructor(props) {
    super(props);
    const { baseUrl } = this.props;
    this.fetchSpotPrices(baseUrl);
    this.timer = setInterval(() => {
      this.fetchSpotPrices(baseUrl);
    }, 15 * 1000);
  }

  state = {
    loading: true,
    spotPrices: []
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  fetchSpotPrices = baseUrl => {
    client(baseUrl)
      .query(query)
      .then(data => {
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

Crypto.propTypes = {
  baseUrl: PropTypes.string.isRequired
};

export default Crypto;
