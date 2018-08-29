const { GraphQLList, GraphQLString } = require('graphql');
const getSpotPrices = require('../../../resolvers/get-spot-prices');
const Price = require('../../Price');

const spotPrices = {
  type: new GraphQLList(Price),
  args: {
    currency: {
      type: GraphQLString
    }
  },
  resolve: getSpotPrices
};

module.exports = spotPrices;
