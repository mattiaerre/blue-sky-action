const express = require('express');
const fetchArticles = require('./fetch-articles');
const fetchCurrentWeather = require('./fetch-current-weather');
const makeModel = require('./make-model');
const kanyini = require('./kanyini');

const router = express.Router();

async function makeArticles(req) {
  return fetchArticles({
    apiKey: process.env.NEWSAPI_API_KEY,
    baseUrl: process.env.NEWSAPI_BASE_URL,
    sortBy: 'top',
    source: req.params.source
  });
}

async function makeWeather() {
  return fetchCurrentWeather({
    apiKey: process.env.OPEN_WEATHER_MAP_API_KEY,
    baseUrl: process.env.OPEN_WEATHER_MAP_BASE_URL,
    id: Object.keys(kanyini).map(key => kanyini[key].id),
    units: 'metric'
  });
}

router.get('/:category/:source', async (req, res) => {
  const model = await makeModel(req, await makeArticles(req), []);
  res.render('index', model);
});

router.get('/', async (req, res) => {
  const model = await makeModel(req, [], await makeWeather());
  res.render('index', model);
});

module.exports = router;
