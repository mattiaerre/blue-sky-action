const appendQuery = require('append-query');
const debug = require('debug')('blue-sky-action:routes/fetch-sources');
const fetch = require('node-fetch');

async function fetchSources() {
  const params = {
    apiKey: process.env.NEWSAPI_API_KEY
  };
  const baseUrl = process.env.NEWSAPI_BASE_URL;
  const url = appendQuery(`${baseUrl}/v2/sources`, params);

  return fetch(url)
    .then(response => response.json())
    .then(({ sources }) => sources)
    .catch(error => {
      debug(error);
      return 'error';
    });
}

module.exports = fetchSources;
