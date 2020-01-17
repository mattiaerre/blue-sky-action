const { GraphQLFloat, GraphQLObjectType, GraphQLString } = require('graphql');
const currency = require('../../data/currency');

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
