const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');
const App = require('../../dist/bundle');
const { name, version } = require('../../package.json');

const router = express.Router();

const imgSrcs = [
  'https://media.giphy.com/media/12R8I0lZSNVgTC/giphy.gif',
  'https://media.giphy.com/media/yrPUdkhz53RgQ/giphy.gif',
  'https://media.giphy.com/media/KL6ZLkfw8yRNu/giphy.gif'
];

router.get('/', (req, res) => {
  const imgSrc = imgSrcs[Math.floor(Math.random() * imgSrcs.length)];
  const props = { name, version, imgSrc };
  const app = renderToString(React.createElement(App, props));
  const model = { title: name, app };
  res.render('index', model);
});

module.exports = router;
