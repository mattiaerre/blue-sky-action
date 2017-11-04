const fetchCurrentWeather = require('./fetch-current-weather');
const home = require('../data/home');
const kanyini = require('../data/kanyini');

const getId = data => Object.keys(data).map(key => data[key].city.id);

async function makeWeather(group) {
  let id;
  if (group === 'kanyini') {
    id = getId(kanyini);
  } else {
    id = getId(home);
  }
  return fetchCurrentWeather({
    apiKey: process.env.OPEN_WEATHER_MAP_API_KEY,
    baseUrl: process.env.OPEN_WEATHER_MAP_BASE_URL,
    id,
    units: 'metric'
  });
}

module.exports = makeWeather;
