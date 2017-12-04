const express = require('express');
const expressJwt = require('express-jwt');
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

router.get('/blog', expressJwt({ secret: process.env.JWT_SECRET }), render);

router.get(
  '/blog/:slug',
  expressJwt({ secret: process.env.JWT_SECRET }),
  render
);

router.get('/kanyini', render);

router.get('/:category/:source', async (req, res) => {
  const { source } = req.params;
  const { url } = req;
  const articles = await makeArticles(source);
  const model = await makeModel(url, articles);
  res.render('index', model);
});

module.exports = router;
