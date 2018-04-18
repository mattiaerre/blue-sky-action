const fetchCurrentWeather = require('./fetch-current-weather');
const home = require('../data/home');

const getId = data => Object.keys(data).map(key => data[key].city.id);

async function makeWeather() {
  return fetchCurrentWeather({
    id: getId(home),
    units: 'metric'
  });
}

module.exports = makeWeather;
