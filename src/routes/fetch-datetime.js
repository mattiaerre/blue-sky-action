const fetch = require('node-fetch');

async function fetchDatetime(ip) {
  console.log('ip:', ip);
  const url = `${process.env.TIMEZONEAPI_BASE_URL}/api/ip/?ip=${ip}`;
  return fetch(url)
    .then(response => response.json())
    .then(({ data: { datetime } }) => datetime);
}

module.exports = fetchDatetime;
