const express = require('express');
const fetchArticles = require('./fetch-articles');
const makeModel = require('./make-model');

const router = express.Router();

router.get('/news/:source', async (req, res) => {
  const model = await makeModel(req);

  const articles = await fetchArticles({
    apiKey: process.env.NEWSAPI_API_KEY,
    baseUrl: process.env.NEWSAPI_BASE_URL,
    sortBy: 'top',
    source: req.params.source
  });

  model.props = { articles, ...model.props };

  res.render('index', model);
});

router.get('/', async (req, res) => {
  const model = await makeModel(req);
  res.render('index', model);
});

module.exports = router;
