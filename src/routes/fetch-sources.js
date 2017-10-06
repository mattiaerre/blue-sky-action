const fetch = require('node-fetch');
const debug = require('debug')('blue-sky-action:routes/fetch-img-src');

async function fetchSources({ baseUrl, category }) {
  const url = `${baseUrl}/v1/sources?category=${category}&language=en&country=us`;
  return fetch(url)
    .then(response => response.json())
    .then(({ sources }) => sources)
    .catch((error) => {
      debug(error);
      return 'error';
    });
}

module.exports = fetchSources;
