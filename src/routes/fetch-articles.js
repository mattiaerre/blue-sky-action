const appendQuery = require('append-query');
const debug = require('debug')('blue-sky-action:routes/fetch-articles');
const fetch = require('node-fetch');

async function fetchArticles({ source }) {
  const params = {
    apiKey: process.env.NEWSAPI_API_KEY,
    sources: source
  };
  const baseUrl = process.env.NEWSAPI_BASE_URL;
  const url = appendQuery(`${baseUrl}/v2/top-headlines`, params);

  return fetch(url)
    .then(response => response.json())
    .then(({ status, code, message, articles }) => {
      if (status === 'error') {
        throw new Error(`${status}, ${code}, ${message}`);
      } else {
        return articles;
      }
    })
    .catch(error => {
      debug(error);
      return []; // info: not too sure about this
    });
}

module.exports = fetchArticles;
