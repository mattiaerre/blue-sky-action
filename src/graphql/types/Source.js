const { GraphQLObjectType, GraphQLString } = require('graphql');

const Source = new GraphQLObjectType({
  name: 'Source',
  fields: {
    category: { type: GraphQLString },
    country: { type: GraphQLString },
    description: { type: GraphQLString },
    id: { type: GraphQLString },
    language: { type: GraphQLString },
    name: { type: GraphQLString },
    url: { type: GraphQLString }
  }
});

module.exports = Source;
