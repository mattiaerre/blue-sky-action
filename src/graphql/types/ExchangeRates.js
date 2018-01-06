const { GraphQLList, GraphQLObjectType, GraphQLString } = require('graphql');
const Rate = require('./Rate');

const ExchangeRates = new GraphQLObjectType({
  name: 'ExchangeRates',
  fields: {
    currency: {
      type: GraphQLString
    },
    rates: {
      type: new GraphQLList(Rate),
      resolve: data =>
        Object.keys(data.rates).map(key => ({
          currency: key,
          value: data.rates[key]
        }))
    }
  }
});

module.exports = ExchangeRates;
