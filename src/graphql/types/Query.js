const { GraphQLList, GraphQLObjectType, GraphQLString } = require('graphql');
const getBuyPrice = require('../resolvers/get-buy-price');
const getCurrencies = require('../resolvers/get-currencies');
const getSpotPrices = require('../resolvers/get-spot-prices');
const Currency = require('./Currency');
const Price = require('./Price');
const { name } = require('../../../package');

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    buyPrice: {
      type: Price,
      args: {
        currencyPair: {
          type: GraphQLString
        }
      },
      resolve: getBuyPrice
    },
    currencies: {
      type: new GraphQLList(Currency),
      resolve: getCurrencies
    },
    name: {
      type: GraphQLString,
      resolve: () => name
    },
    spotPrices: {
      type: new GraphQLList(Price),
      args: {
        currency: {
          type: GraphQLString
        }
      },
      resolve: getSpotPrices
    }
  }
});

module.exports = Query;
