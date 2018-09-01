const { GraphQLList } = require('graphql');
const getCurrencies = require('../../../resolvers/get-currencies');
const Currency = require('../../Currency');

const currencies = {
  resolve: getCurrencies,
  type: new GraphQLList(Currency)
};

module.exports = currencies;
