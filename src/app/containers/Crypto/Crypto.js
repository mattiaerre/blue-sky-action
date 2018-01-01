import React, { Component } from 'react';
import { createApolloFetch } from 'apollo-fetch';

const uri = '/graphql';
const apolloFetch = createApolloFetch({ uri });

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

class Crypto extends Component {
  constructor(props) {
    super(props);
    apolloFetch({ query })
      .then(result => {
        const { data: { spotPrices } } = result;
        this.setState({ spotPrices });
      })
      .catch(error => new Error(error));
  }

  state = {
    spotPrices: []
  };

  render() {
    return (
      <div className="row Crypto">
        {this.state.spotPrices.map(element => (
          <div className="col-md-3" key={element.code}>
            <strong>{element.name}</strong>
          </div>
        ))}
      </div>
    );
  }
}

export default Crypto;
