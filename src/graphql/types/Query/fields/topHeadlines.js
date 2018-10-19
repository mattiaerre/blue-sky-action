const { GraphQLList, GraphQLString } = require('graphql');
const getTopHeadlines = require('../../../resolvers/get-top-headlines');
const Article = require('../../Article');

const topHeadlines = {
  args: {
    source: {
      type: GraphQLString
    }
  },
  resolve: getTopHeadlines,
  type: new GraphQLList(Article)
};

module.exports = topHeadlines;
