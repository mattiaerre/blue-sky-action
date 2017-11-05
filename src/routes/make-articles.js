const fetchArticles = require('./fetch-articles');

async function makeArticles(source) {
  return fetchArticles({
    apiKey: process.env.NEWSAPI_API_KEY,
    baseUrl: process.env.NEWSAPI_BASE_URL,
    sortBy: 'top',
    source
  });
}

module.exports = makeArticles;
