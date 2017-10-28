const { GraphQLObjectType, GraphQLSchema, GraphQLString } = require('graphql');

const { name } = require('../../package');

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    name: {
      type: GraphQLString,
      resolve: () => name
    }
  }
});

const schema = new GraphQLSchema({
  query: QueryType
});

module.exports = schema;
