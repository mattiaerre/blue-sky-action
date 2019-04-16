const { GraphQLFloat, GraphQLObjectType, GraphQLString } = require('graphql');

const currency = {
  BAT: {
    color: 'rgb(237, 93, 42)',
    foregroundColor: 'white',
    name: 'Basic Attention Token'
  },
  BCH: { color: '#8DC451', foregroundColor: 'black', name: 'Bitcoin Cash' },
  BTC: { color: '#FFB119', foregroundColor: 'black', name: 'Bitcoin' },
  CAD: { color: '#FFFFFF', foregroundColor: 'black', name: 'Canadian Dollar' },
  ETC: { color: '#59D4AF', foregroundColor: 'black', name: 'Ethereum Classic' },
  ETH: { color: '#6F7CBA', foregroundColor: 'white', name: 'Ethereum' },
  EUR: { color: '#FFFFFF', foregroundColor: 'black', name: 'Euro' },
  GBP: { color: '#FFFFFF', foregroundColor: 'black', name: 'British Pound' },
  LTC: { color: '#B5B5B5', foregroundColor: 'black', name: 'Litecoin' },
  USDC: {
    color: 'rgb(58, 118, 195)',
    foregroundColor: 'white',
    name: 'USD Coin'
  },
  XLM: { color: '#FFFFFF', foregroundColor: 'black', name: 'Stellar Lumens' },
  XRP: { color: '#222222', foregroundColor: 'white', name: 'XRP' },
  ZEC: {
    color: 'rgb(228, 179, 89)',
    foregroundColor: 'black',
    name: 'Zcash'
  },
  ZRX: { color: '#302C2C', foregroundColor: 'white', name: '0x' }
};

/*
[ { base: 'BTC', currency: 'USD', amount: '3249.66' },
  { base: 'BCH', currency: 'USD', amount: '100.24' },
  { base: 'ETH', currency: 'USD', amount: '82.69' },
  { base: 'ETC', currency: 'USD', amount: '3.45' },
  { base: 'LTC', currency: 'USD', amount: '23.18' },
  { base: 'ZRX', currency: 'USD', amount: '0.29' },
  { base: 'USDC', currency: 'USD', amount: '1.00' },
  { base: 'BAT', currency: 'USD', amount: '0.12' },
  { base: 'ZEC', currency: 'USD', amount: '50.56' },
  { base: 'EUR', currency: 'USD', amount: '1.14' },
  { base: 'GBP', currency: 'USD', amount: '1.28' },
  { base: 'CAD', currency: 'USD', amount: '0.75' } ]
*/

const Price = new GraphQLObjectType({
  name: 'Price',
  fields: {
    amount: {
      type: GraphQLFloat
    },
    base: {
      type: GraphQLString
    },
    code: {
      type: GraphQLString,
      resolve: data => data.base
    },
    color: {
      type: GraphQLString,
      resolve: data =>
        currency[data.base] ? currency[data.base].color : 'white'
    },
    currency: {
      type: GraphQLString
    },
    foregroundColor: {
      type: GraphQLString,
      resolve: data =>
        currency[data.base] ? currency[data.base].foregroundColor : 'black'
    },
    name: {
      type: GraphQLString,
      resolve: data =>
        currency[data.base] ? currency[data.base].name : 'UNKNOWN'
    }
  }
});

module.exports = Price;
