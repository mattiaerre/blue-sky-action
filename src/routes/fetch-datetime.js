/* eslint-disable camelcase */
const fetch = require('node-fetch');
const debug = require('debug')('blue-sky-action:routes/fetch-datetime');

async function fetchDatetime(ip) {
  const url = `${process.env.IPGEOLOCATION_BASE_URL}/ipgeo?apiKey=${process.env.IPGEOLOCATION_API_KEY}&ip=${ip}`;
  return fetch(url)
    .then(response => response.json())
    .then(({ time_zone }) => time_zone)
    .catch(error => {
      debug(error);
      return null;
    });
}

module.exports = fetchDatetime;
