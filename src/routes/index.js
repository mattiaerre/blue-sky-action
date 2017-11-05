const express = require('express');
const makeArticles = require('./make-articles');
const makeModel = require('./make-model');

const router = express.Router();

router.get('/', async (req, res) => {
  const { url } = req;
  const model = await makeModel(url, []);
  res.render('index', model);
});

router.get('/kanyini', async (req, res) => {
  const { url } = req;
  const model = await makeModel(url, []);
  res.render('index', model);
});

router.get('/:category/:source', async (req, res) => {
  const { source } = req.params;
  const { url } = req;
  const articles = await makeArticles(source);
  const model = await makeModel(url, articles);
  res.render('index', model);
});

module.exports = router;
