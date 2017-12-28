const { GraphQLObjectType, GraphQLSchema, GraphQLString } = require('graphql');
const getBuyPrice = require('./resolvers/get-buy-price');
const BuyPrice = require('./types/BuyPrice');
const { name } = require('../../package');

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    name: {
      type: GraphQLString,
      resolve: () => name
    },
    buyPrice: {
      type: BuyPrice,
      resolve: getBuyPrice
    }
  }
});

const schema = new GraphQLSchema({
  query: Query
});

module.exports = schema;
