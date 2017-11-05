const express = require('express');
const fetchArticles = require('./fetch-articles');
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

router.get('/', async (req, res) => {
  const model = await makeModel(req, []);
  res.render('index', model);
});

router.get('/kanyini', async (req, res) => {
  const model = await makeModel(req, []);
  res.render('index', model);
});

router.get('/:category/:source', async (req, res) => {
  const model = await makeModel(req, await makeArticles(req));
  res.render('index', model);
});

module.exports = router;
