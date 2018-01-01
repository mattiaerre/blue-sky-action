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
      }
    }
  },
  graphiql: true,
  schema
});

module.exports = middleware;
