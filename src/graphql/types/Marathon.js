const { GraphQLObjectType, GraphQLString } = require('graphql');

const Marathon = new GraphQLObjectType({
  name: 'Marathon',
  fields: {
    city: {
      resolve: data => data.info.city,
      type: GraphQLString
    },
    id: {
      type: GraphQLString
    },
    name: {
      resolve: data => data.info.name,
      type: GraphQLString
    },
    when: {
      type: GraphQLString
    }
  }
});

module.exports = Marathon;
