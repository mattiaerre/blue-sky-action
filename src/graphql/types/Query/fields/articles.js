const { GraphQLList, GraphQLString } = require('graphql');
const getArticles = require('../../../resolvers/get-articles');
const Article = require('../../../types/Article');

const articles = {
  args: {
    q: {
      type: GraphQLString
    }
  },
  resolve: getArticles,
  type: new GraphQLList(Article)
};

module.exports = articles;
