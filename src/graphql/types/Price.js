const { GraphQLFloat, GraphQLObjectType, GraphQLString } = require('graphql');

const currency = {
  BCH: { color: '#8DC451', foregroundColor: 'black', name: 'Bitcoin Cash' },
  BTC: { color: '#FFB119', foregroundColor: 'black', name: 'Bitcoin' },
  CAD: { color: '#FFFFFF', foregroundColor: 'black', name: 'Canadian Dollar' },
  ETC: { color: '#59D4AF', foregroundColor: 'black', name: 'Ethereum Classic' },
  ETH: { color: '#6F7CBA', foregroundColor: 'black', name: 'Ethereum' },
  EUR: { color: '#FFFFFF', foregroundColor: 'black', name: 'Euro' },
  GBP: { color: '#FFFFFF', foregroundColor: 'black', name: 'British Pound' },
  LTC: { color: '#B5B5B5', foregroundColor: 'black', name: 'Litecoin' },
  USDC: {
    color: 'rgb(58, 118, 195)',
    foregroundColor: 'white',
    name: 'USD Coin'
  },
  ZRX: { color: '#302C2C', foregroundColor: 'white', name: '0x' }
};

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
