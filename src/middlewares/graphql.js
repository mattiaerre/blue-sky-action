const graphqlHTTP = require('express-graphql');
const schema = require('../graphql/schema');

const middleware = graphqlHTTP({
  context: {
    config: {
      coinbase: {
        baseUrl: process.env.COINBASE_BASE_URL,
        options: {
          apiKey: process.env.COINBASE_API_KEY,
          apiSecret: process.env.COINBASE_API_SECRET,
          version: process.env.COINBASE_VERSION
        }
      },
      newsapi: {
        apiKey: process.env.NEWSAPI_API_KEY,
        baseUrl: process.env.NEWSAPI_BASE_URL
      }
    }
  },
  graphiql: true,
  schema
});

module.exports = middleware;
