const butter = require('buttercms')(process.env.BUTTER_CMS_API_TOKEN);
const express = require('express');
const makeArticles = require('./make-articles');
const makeWeather = require('./make-weather');

const router = express.Router();

router.get('/articles', async (req, res) => {
  const { source } = req.query;
  const articles = await makeArticles(source);
  res.send(articles);
});

router.get('/blog', async (req, res) => {
  const data = await butter.post
    .list({ page: 1, page_size: 10 })
    .then(response => response.data);
  res.send({
    next_page: data.meta.next_page,
    posts: data.data,
    previous_page: data.meta.previous_page
  });
});

router.get('/blog/:slug', async (req, res) => {
  const { params: { slug } } = req;
  const data = await butter.post.retrieve(slug).then(response => response.data);
  res.send({
    title: data.data.title,
    post: data.data,
    published: new Date(data.data.published)
  });
});

router.get('/weather', async (req, res) => {
  const { group } = req.query;
  const weather = await makeWeather(group);
  res.send(weather);
});

module.exports = router;
