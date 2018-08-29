const dirToObject = require('dir-to-object');
const { GraphQLObjectType } = require('graphql');
const { join } = require('path');

const config = {
  name: 'Query',
  fields: dirToObject(join(__dirname, 'fields'))
};

const Query = new GraphQLObjectType(config);

module.exports = Query;
