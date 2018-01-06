const { GraphQLFloat, GraphQLObjectType, GraphQLString } = require('graphql');

const Rate = new GraphQLObjectType({
  name: 'Rate',
  fields: {
    currency: {
      type: GraphQLString
    },
    value: {
      type: GraphQLFloat
    }
  }
});

module.exports = Rate;
