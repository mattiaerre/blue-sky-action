const express = require('express');
const makeArticles = require('./make-articles');
const makeWeather = require('./make-weather');

const router = express.Router();

router.get('/articles', async (req, res) => {
  const { source } = req.query;
  const articles = await makeArticles(source);
  res.send(articles);
});

router.get('/weather', async (req, res) => {
  const { group } = req.query;
  const weather = await makeWeather(group);
  res.send(weather);
});

module.exports = router;
