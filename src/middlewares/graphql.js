const graphqlHTTP = require('express-graphql');
const schema = require('../graphql/schema');

const middleware = graphqlHTTP({
  schema,
  graphiql: true
});

module.exports = middleware;
