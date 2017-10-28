const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

const middleware = graphqlHTTP({
  schema,
  graphiql: true
});

module.exports = middleware;
