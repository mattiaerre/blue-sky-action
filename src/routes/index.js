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
  console.log('ip:', ip);
  const datetime = await fetchDatetime(ip);
  console.log('datetime:', datetime);

  const model = await makeModel({
    articles,
    baseUrl: `${
      process.env.ENVIRONMENT === 'local' ? req.protocol : 'https'
    }://${req.get('host')}`,
    datetime,
    url
  });
  console.log('model:', model);
  res.render('index', model);
}

router.get('/', render);

router.get('/blog', render);

router.get('/blog/:slug', render);

router.get('/:category/:source', async (req, res) => {
  render(req, res, true);
});

module.exports = router;
