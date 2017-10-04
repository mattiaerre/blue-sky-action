const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');
const fetch = require('node-fetch');
// const debug = require('debug')('blue-sky-action:routes/index');
const App = require('../../dist/bundle');
const { name, version } = require('../../package.json');

const router = express.Router();

async function fetchImgSrc() {
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_API_KEY}&tag=&rating=G`;
  return fetch(url)
    .then(response => response.json())
    .then(({ data }) => data.image_url);
}

router.get('/', async (req, res) => {
  const imgSrc = await fetchImgSrc();
  const props = { name, version, imgSrc };
  const app = renderToString(React.createElement(App, props));
  const model = { title: name, app };
  res.render('index', model);
});

module.exports = router;
