const express = require('express');
const fetchArticles = require('./fetch-articles');
const fetchCurrentWeather = require('./fetch-current-weather');
const makeModel = require('./make-model');

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
  const london = await fetchCurrentWeather({
    apiKey: process.env.OPEN_WEATHER_MAP_API_KEY,
    baseUrl: process.env.OPEN_WEATHER_MAP_BASE_URL,
    q: 'London,GB',
    units: 'metric'
  });

  const sanFrancisco = await fetchCurrentWeather({
    apiKey: process.env.OPEN_WEATHER_MAP_API_KEY,
    baseUrl: process.env.OPEN_WEATHER_MAP_BASE_URL,
    q: process.env.OPEN_WEATHER_MAP_Q,
    units: 'metric'
  });

  return {
    london,
    sanFrancisco
  };
}

router.get('/:category/:source', async (req, res) => {
  const model = await makeModel(req, await makeArticles(req), null);
  res.render('index', model);
});

router.get('/:category', async (req, res) => {
  const model = await makeModel(req, [], null);
  res.render('index', model);
});

router.get('/', async (req, res) => {
  const model = await makeModel(req, [], await makeWeather());
  res.render('index', model);
});

module.exports = router;
