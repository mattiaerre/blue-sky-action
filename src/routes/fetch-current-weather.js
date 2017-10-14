const appendQuery = require('append-query');
const debug = require('debug')('blue-sky-action:routes/fetch-current-weather');
const fetch = require('node-fetch');

async function fetchCurrentWeather({ apiKey, baseUrl, q, units }) {
  const params = {
    appid: apiKey,
    q,
    units
  };
  const url = appendQuery(`${baseUrl}/data/2.5/weather`, params);

  return fetch(url)
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      debug(error);
      return 'error';
    });
}

module.exports = fetchCurrentWeather;
