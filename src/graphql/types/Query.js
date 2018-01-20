const { GraphQLList, GraphQLObjectType, GraphQLString } = require('graphql');
const getArticles = require('../resolvers/get-articles');
const getBuyPrice = require('../resolvers/get-buy-price');
const getCurrencies = require('../resolvers/get-currencies');
const getExchangeRates = require('../resolvers/get-exchange-rates');
const getSources = require('../resolvers/get-sources');
const getSpotPrices = require('../resolvers/get-spot-prices');
const getTopHeadlines = require('../resolvers/get-top-headlines');
const Article = require('./Article');
const Currency = require('./Currency');
const ExchangeRates = require('./ExchangeRates');
const Source = require('./Source');
const Price = require('./Price');
const getIpAddress = require('../../routes/get-ip-address');
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
    ip: {
      resolve: (_, __, { req }) => getIpAddress(req),
      type: GraphQLString
    },
    name: {
      type: GraphQLString,
      resolve: () => name
    },
    sources: {
      args: { q: { type: GraphQLString } },
      resolve: getSources,
      type: new GraphQLList(Source)
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
