const { GraphQLString } = require('graphql');
const getBuyPrice = require('../../../resolvers/get-buy-price');
const Price = require('../../Price');

const buyPrice = {
  args: {
    currencyPair: {
      type: GraphQLString
    }
  },
  resolve: getBuyPrice,
  type: Price
};

module.exports = buyPrice;
