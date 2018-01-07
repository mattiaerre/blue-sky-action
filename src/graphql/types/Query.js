const { GraphQLList, GraphQLObjectType, GraphQLString } = require('graphql');
const getArticles = require('../resolvers/get-articles');
const getBuyPrice = require('../resolvers/get-buy-price');
const getCurrencies = require('../resolvers/get-currencies');
const getSpotPrices = require('../resolvers/get-spot-prices');
const getTopHeadlines = require('../resolvers/get-top-headlines');
const getExchangeRates = require('../resolvers/get-exchange-rates');
const Article = require('../types/Article');
const Currency = require('./Currency');
const ExchangeRates = require('./ExchangeRates');
const Price = require('./Price');
const { name } = require('../../../package');

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    articles: {
      args: {
        q: {
          type: GraphQLString
        }
      },
      resolve: getArticles,
      type: new GraphQLList(Article)
    },
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
    exchangeRates: {
      args: {
        currency: {
          type: GraphQLString
        }
      },
      resolve: getExchangeRates,
      type: ExchangeRates
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
    },
    topHeadlines: {
      args: {
        source: {
          type: GraphQLString
        }
      },
      resolve: getTopHeadlines,
      type: new GraphQLList(Article)
    }
  }
});

module.exports = Query;
