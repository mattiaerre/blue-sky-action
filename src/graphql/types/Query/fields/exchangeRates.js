const { GraphQLString } = require('graphql');
const getExchangeRates = require('../../../resolvers/get-exchange-rates');
const ExchangeRates = require('../../ExchangeRates');

const exchangeRates = {
  args: {
    currency: {
      type: GraphQLString
    }
  },
  resolve: getExchangeRates,
  type: ExchangeRates
};

module.exports = exchangeRates;
