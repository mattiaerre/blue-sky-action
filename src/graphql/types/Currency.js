const { GraphQLObjectType, GraphQLString } = require('graphql');

const Currency = new GraphQLObjectType({
  name: 'Currency',
  fields: {
    id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    }
  }
});

module.exports = Currency;
