const { GraphQLFloat, GraphQLObjectType, GraphQLString } = require('graphql');

const currency = {
  BCH: { color: '#8DC451', name: 'Bitcoin Cash' },
  BTC: { color: '#FFB119', name: 'Bitcoin' },
  CAD: { color: '#FFFFFF', name: 'Canadian Dollar' },
  ETC: { color: '#59D4AF', name: 'Ethereum Classic' },
  ETH: { color: '#6F7CBA', name: 'Ethereum' },
  EUR: { color: '#FFFFFF', name: 'Euro' },
  GBP: { color: '#FFFFFF', name: 'British Pound' },
  LTC: { color: '#B5B5B5', name: 'Litecoin' }
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
        currency[data.base] ? currency[data.base].color : '#FFFF'
    },
    currency: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString,
      resolve: data =>
        currency[data.base] ? currency[data.base].name : 'UNKNOWN'
    }
  }
});

module.exports = Price;
