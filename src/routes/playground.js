const butter = require('buttercms')(process.env.BUTTER_CMS_API_TOKEN);
const express = require('express');

const router = express.Router();

async function render(req, res) {
  const data = await butter.post
    .list({ page: 1, page_size: 10 })
    .then(response => response.data);
  res.render('playground', {
    next_page: data.meta.next_page,
    posts: data.data,
    previous_page: data.meta.previous_page
  });
}

router.get('/', render);
router.get('/p/:page', render);

router.get('/:slug', async (req, res) => {
  const { params: { slug } } = req;
  const data = await butter.post.retrieve(slug).then(response => response.data);
  res.render('playground', {
    title: data.data.title,
    post: data.data,
    published: new Date(data.data.published)
  });
});

module.exports = router;
