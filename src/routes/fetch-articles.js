const appendQuery = require('append-query');
const debug = require('debug')('blue-sky-action:routes/fetch-articles');
const fetch = require('node-fetch');

async function fetchArticles({ apiKey, baseUrl, sortBy, source }) {
  const params = {
    apiKey,
    sortBy,
    source
  };
  const url = appendQuery(`${baseUrl}/v1/articles`, params);

  return fetch(url)
    .then(response => response.json())
    .then(({ articles }) => articles)
    .catch((error) => {
      debug(error);
      return 'error';
    });
}

module.exports = fetchArticles;
