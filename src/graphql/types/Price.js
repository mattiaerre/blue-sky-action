const { GraphQLFloat, GraphQLObjectType, GraphQLString } = require('graphql');

const currency = {
  BTC: { color: '#FFB119', name: 'Bitcoin' },
  BCH: { color: '#8DC451', name: 'Bitcoin Cash' },
  ETH: { color: '#6F7CBA', name: 'Ethereum' },
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
      resolve: data => currency[data.base].color
    },
    currency: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString,
      resolve: data => currency[data.base].name
    }
  }
});

module.exports = Price;
