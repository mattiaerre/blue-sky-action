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
    id,
    units: 'metric'
  });
}

module.exports = makeWeather;
