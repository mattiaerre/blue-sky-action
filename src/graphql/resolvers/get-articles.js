const appendQuery = require('append-query');
const fetch = require('node-fetch');

async function getArticles(_, args, context) {
  const { apiKey, baseUrl } = context.config.newsapi;
  const params = {
    apiKey,
    language: 'en',
    q: args.q,
    sortBy: 'publishedAt'
  };
  const url = appendQuery(`${baseUrl}/v2/everything`, params);

  return fetch(url)
    .then(response => response.json())
    .then(data => data.articles);
}

module.exports = getArticles;
