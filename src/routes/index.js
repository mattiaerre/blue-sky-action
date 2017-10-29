const express = require('express');
const fetchArticles = require('./fetch-articles');
const fetchCurrentWeather = require('./fetch-current-weather');
const makeModel = require('./make-model');
const home = require('./home');
const kanyini = require('./kanyini');

const router = express.Router();

const getId = data => Object.keys(data).map(key => data[key].city.id);

async function makeArticles(req) {
  return fetchArticles({
    apiKey: process.env.NEWSAPI_API_KEY,
    baseUrl: process.env.NEWSAPI_BASE_URL,
    sortBy: 'top',
    source: req.params.source
  });
}

async function makeWeather(id) {
  return fetchCurrentWeather({
    apiKey: process.env.OPEN_WEATHER_MAP_API_KEY,
    baseUrl: process.env.OPEN_WEATHER_MAP_BASE_URL,
    id,
    units: 'metric'
  });
}

async function weather() {
  return {
    home: await makeWeather(getId(home)),
    kanyini: await makeWeather(getId(kanyini))
  };
}

router.get('/', async (req, res) => {
  const model = await makeModel(req, [], await weather());
  res.render('index', model);
});

router.get('/kanyini', async (req, res) => {
  const model = await makeModel(req, [], await weather());
  res.render('index', model);
});

router.get('/:category/:source', async (req, res) => {
  const model = await makeModel(req, await makeArticles(req), await weather());
  res.render('index', model);
});

module.exports = router;
