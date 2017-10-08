const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');
const fetchArticles = require('./fetch-articles');
const fetchImgSrc = require('./fetch-img-src');
const App = require('../../dist/bundle').default;
const { name, version } = require('../../package.json');

const router = express.Router();

async function makeModel() {
  const tag = process.env.GIPHY_TAG;

  const imgSrc = await fetchImgSrc({
    apiKey: process.env.GIPHY_API_KEY,
    baseUrl: process.env.GIPHY_BASE_URL,
    tag
  });

  const props = { imgSrc, name, quote: process.env.QUOTE, tag, version, who: process.env.WHO };
  const app = renderToString(React.createElement(App, props));
  const model = { app, props, title: name };
  return model;
}

router.get('/news/:source', async (req, res) => {
  const model = await makeModel(res);

  const articles = await fetchArticles({
    apiKey: process.env.NEWSAPI_API_KEY,
    baseUrl: process.env.NEWSAPI_BASE_URL,
    sortBy: 'top',
    source: req.params.source
  });

  res.render('index', { articles, ...model });
});


router.get('/', async (req, res) => {
  const model = await makeModel(res);
  res.render('index', model);
});

module.exports = router;
