const fetch = require('node-fetch');
const debug = require('debug')('blue-sky-action:routes/fetch-img-src');

async function fetchImgSrc({ apiKey, baseUrl, tag }) {
  const url = `${baseUrl}/v1/gifs/random?api_key=${apiKey}&tag=${tag}&rating=G`;
  return fetch(url)
    .then(response => response.json())
    .then(({ data }) => data.image_url)
    .catch(error => {
      debug(error);
      return 'error';
    });
}

module.exports = fetchImgSrc;
