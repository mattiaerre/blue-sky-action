const fetch = require('node-fetch');
const debug = require('debug')('blue-sky-action:routes/fetch-datetime');

async function fetchDatetime(ip) {
  const url = `${process.env.TIMEZONEAPI_BASE_URL}/api/ip/?ip=${ip}`;
  return fetch(url)
    .then(response => response.json())
    .then(({ data: { datetime } }) => datetime)
    .catch(error => {
      debug(error);
      return null;
    });
}

module.exports = fetchDatetime;
