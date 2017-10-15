const express = require('express');
const fetchArticles = require('./fetch-articles');

const router = express.Router();

router.get('/articles', async (req, res) => {
  const articles = await fetchArticles({
    apiKey: process.env.NEWSAPI_API_KEY,
    baseUrl: process.env.NEWSAPI_BASE_URL,
    source: req.query.source
  });
  res.send(articles);
});

module.exports = router;
