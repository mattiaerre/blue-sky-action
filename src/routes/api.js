const express = require('express');
const makeArticles = require('./make-articles');
const { makePost, makePosts } = require('./make-blog');
const makeWeather = require('./make-weather');

const router = express.Router();

router.get('/articles', async (req, res) => {
  const { source } = req.query;
  const articles = await makeArticles(source);
  res.send(articles);
});

router.get('/blog', async (req, res) => {
  const posts = await makePosts();
  res.send(posts);
});

router.get('/blog/:slug', async (req, res) => {
  const { params: { slug } } = req;
  const post = await makePost(slug);
  res.send(post);
});

router.get('/weather', async (req, res) => {
  const { group } = req.query;
  const weather = await makeWeather(group);
  res.send(weather);
});

module.exports = router;
