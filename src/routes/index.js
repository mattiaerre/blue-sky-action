const express = require('express');
const fetchDatetime = require('./fetch-datetime');
const getIpAddress = require('./get-ip-address');
const makeArticles = require('./make-articles');
const makeModel = require('./make-model');

const router = express.Router();

async function render(req, res, withArticles) {
  const { url } = req;
  let articles = [];
  if (withArticles === true) {
    const { source } = req.params;
    articles = await makeArticles(source);
  }
  const ip = getIpAddress(req);
  const datetime = await fetchDatetime(ip);
  const model = await makeModel(url, articles, datetime);
  res.render('index', model);
}

router.get('/', render);

router.get('/blog', render);

router.get('/blog/:slug', render);

router.get('/:category/:source', async (req, res) => {
  render(req, res, true);
});

module.exports = router;
