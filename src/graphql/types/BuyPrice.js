const { GraphQLFloat, GraphQLObjectType, GraphQLString } = require('graphql');
const numeral = require('numeral');

const BuyPrice = new GraphQLObjectType({
  name: 'BuyPrice',
  fields: {
    amount: {
      type: GraphQLFloat
    },
    base: {
      type: GraphQLString
    },
    currency: {
      type: GraphQLString
    },
    numeral: {
      type: GraphQLString,
      resolve: data => numeral(data.amount).format('$0,0.00')
    }
  }
});

module.exports = BuyPrice;
