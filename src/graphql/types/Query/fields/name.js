const { GraphQLString } = require('graphql');
const { name } = require('../../../../../package');

const _name = {
  resolve: () => name,
  type: GraphQLString
};

module.exports = _name;
