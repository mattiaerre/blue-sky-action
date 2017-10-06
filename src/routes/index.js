const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');
const fetchImgSrc = require('./fetch-img-src');
const App = require('../../dist/bundle').default;
const { name, version } = require('../../package.json');

const router = express.Router();

router.get('/', async (req, res) => {
  const tag = process.env.GIPHY_TAG;

  const imgSrc = await fetchImgSrc({
    baseUrl: process.env.GIPHY_BASE_URL,
    apiKey: process.env.GIPHY_API_KEY,
    tag
  });
  const props = { imgSrc, name, tag, version };
  const app = renderToString(React.createElement(App, props));
  const model = { title: name, app, props };
  res.render('index', model);
});

module.exports = router;
