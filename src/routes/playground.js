const express = require('express');
const fetchShources = require('./fetch-sources');

const router = express.Router();

function sortByKey(a, b, key) {
  if (a[key] < b[key]) {
    return -1;
  }
  if (a[key] > b[key]) {
    return 1;
  }
  return 0;
}

router.get('/', async (req, res) => {
  const sources = await fetchShources({
    baseUrl: process.env.NEWSAPI_BASE_URL,
    category: req.query.category ? req.query.category : null
  });

  const model = {
    sources,
    categories: sources
      .sort((a, b) => (sortByKey(a, b, 'category')))
      .reduce((acc, item) => {
        if (acc[item.category]) {
          acc[item.category].push(item);
        } else {
          acc[item.category] = [item];
        }
        acc[item.category].sort((a, b) => (sortByKey(a, b, 'id')));
        return acc;
      }, {})
  };

  res.render('playground', model);
});

module.exports = router;
