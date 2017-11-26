const express = require('express');
const makeArticles = require('./make-articles');
const makeModel = require('./make-model');

const router = express.Router();

async function render(req, res) {
  const { url } = req;
  const model = await makeModel(url, []);
  res.render('index', model);
}

router.get('/', render);

router.get(process.env.FOR_SALE_PATH, render);

router.get('/blog', render);

router.get('/blog/:slug', render);

router.get('/kanyini', render);

router.get('/:category/:source', async (req, res) => {
  const { source } = req.params;
  const { url } = req;
  const articles = await makeArticles(source);
  const model = await makeModel(url, articles);
  res.render('index', model);
});

module.exports = router;
