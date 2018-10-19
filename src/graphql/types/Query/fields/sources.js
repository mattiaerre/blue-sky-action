const { GraphQLList, GraphQLString } = require('graphql');
const getSources = require('../../../resolvers/get-sources');
const Source = require('../../Source');

const sources = {
  args: { q: { type: GraphQLString } },
  resolve: getSources,
  type: new GraphQLList(Source)
};

module.exports = sources;
