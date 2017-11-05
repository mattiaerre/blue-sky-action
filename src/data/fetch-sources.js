const appendQuery = require('append-query');
const debug = require('debug')('blue-sky-action:routes/fetch-sources');
const fetch = require('node-fetch');

async function fetchSources({ baseUrl, category, language, country }) {
  const params = {
    category,
    language,
    country
  };
  const url = appendQuery(`${baseUrl}/v1/sources`, params);

  return fetch(url)
    .then(response => response.json())
    .then(({ sources }) => sources)
    .catch(error => {
      debug(error);
      return 'error';
    });
}

module.exports = fetchSources;
