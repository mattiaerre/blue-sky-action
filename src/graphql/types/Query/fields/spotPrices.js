const { GraphQLList, GraphQLString } = require('graphql');
const getSpotPrices = require('../../../resolvers/get-spot-prices');
const Price = require('../../Price');

const spotPrices = {
  args: {
    currency: {
      type: GraphQLString
    }
  },
  resolve: getSpotPrices,
  type: new GraphQLList(Price)
};

module.exports = spotPrices;
