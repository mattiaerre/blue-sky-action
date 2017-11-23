const appendQuery = require('append-query');
const debug = require('debug')('blue-sky-action:routes/fetch-current-weather');
const fetch = require('node-fetch');

async function fetchCurrentWeather({ apiKey, baseUrl, id, units }) {
  const params = {
    appid: apiKey,
    units
  };
  let url = appendQuery(`${baseUrl}/data/2.5/group`, params);
  url = `${url}&id=${id}`;

  return fetch(url)
    .then(response => response.json())
    .then(data => data.list)
    .catch(error => {
      debug(error);
      return []; // info: not too sure about this
    });
}

module.exports = fetchCurrentWeather;
