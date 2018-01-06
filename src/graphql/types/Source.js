const { GraphQLObjectType, GraphQLString } = require('graphql');

const Source = new GraphQLObjectType({
  name: 'Source',
  fields: {
    id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    }
  }
});

module.exports = Source;
