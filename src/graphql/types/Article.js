const { GraphQLObjectType, GraphQLString } = require('graphql');
const Source = require('./Source');

const Article = new GraphQLObjectType({
  name: 'Article',
  fields: {
    description: {
      type: GraphQLString
    },
    source: {
      type: Source
    },
    title: {
      type: GraphQLString
    },
    url: {
      type: GraphQLString
    }
  }
});

module.exports = Article;
