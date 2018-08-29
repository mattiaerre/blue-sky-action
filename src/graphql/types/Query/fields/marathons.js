const { GraphQLList } = require('graphql');
const getMarathons = require('../../../resolvers/get-marathons');
const Marathon = require('../../../types/Marathon');

const marathons = {
  resolve: getMarathons,
  type: new GraphQLList(Marathon)
};

module.exports = marathons;
