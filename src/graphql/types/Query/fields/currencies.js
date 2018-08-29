const { GraphQLList } = require('graphql');
const getCurrencies = require('../../../resolvers/get-currencies');
const Currency = require('../../Currency');

const currencies = {
  type: new GraphQLList(Currency),
  resolve: getCurrencies
};

module.exports = currencies;
