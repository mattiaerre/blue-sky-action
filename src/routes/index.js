const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');
const App = require('../../dist/bundle');
const { name, version } = require('../../package.json');

const router = express.Router();

router.get('/', (req, res) => {
  const app = renderToString(
    React.createElement(
      App,
      { name, version },
      null
    )
  );

  const model = {
    title: name,
    app
  };

  res.render('index', model);
});

module.exports = router;
