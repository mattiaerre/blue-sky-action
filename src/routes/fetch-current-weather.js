const appendQuery = require('append-query');
const debug = require('debug')('blue-sky-action:routes/fetch-current-weather');
const fetch = require('node-fetch');

async function fetchCurrentWeather({ id, units }) {
  const params = {
    appid: process.env.OPEN_WEATHER_MAP_API_KEY,
    units
  };
  const baseUrl = process.env.OPEN_WEATHER_MAP_BASE_URL;
  let url = appendQuery(`${baseUrl}/data/2.5/group`, params);
  url = `${url}&id=${id}`;

  return fetch(url)
    .then(response => response.json())
    .then(data => data.list)
    .catch(error => {
      debug(error);
      return [];
    });
}

module.exports = fetchCurrentWeather;
