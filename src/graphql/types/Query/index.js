const { GraphQLObjectType } = require('graphql');
const { join } = require('path');
const dirToGraphQLFields = require('./dir-to-graphql-fields');

const config = {
  name: 'Query',
  fields: dirToGraphQLFields(join(__dirname, 'fields'))
};

const Query = new GraphQLObjectType(config);

module.exports = Query;
