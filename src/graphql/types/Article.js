const { GraphQLObjectType, GraphQLString } = require('graphql');
const Source = require('./Source');

const Article = new GraphQLObjectType({
  name: 'Article',
  fields: {
    author: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    publishedAt: {
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
    },
    urlToImage: {
      type: GraphQLString
    }
  }
});

module.exports = Article;
