const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');
const fetchImgSrc = require('./fetch-img-src');
const fetchSources = require('./fetch-sources');
const App = require('../../dist/bundle').default;
const { name, version } = require('../../package.json');

const router = express.Router();

router.get('/', async (req, res) => {
  const tag = process.env.GIPHY_TAG;

  const imgSrc = await fetchImgSrc({
    apiKey: process.env.GIPHY_API_KEY,
    baseUrl: process.env.GIPHY_BASE_URL,
    tag
  });

  const sources = await fetchSources({
    baseUrl: process.env.NEWSAPI_BASE_URL,
    category: 'technology'
  });

  const props = { imgSrc, name, sources, tag, version, who: process.env.WHO };
  const app = renderToString(React.createElement(App, props));
  const model = { app, props, title: name };
  res.render('index', model);
});

module.exports = router;
