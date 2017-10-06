const express = require('express');
const fetchImgSrc = require('./fetch-img-src');

const router = express.Router();

router.get('/images', async (req, res) => {
  const imgSrc = await fetchImgSrc({
    baseUrl: process.env.GIPHY_BASE_URL,
    apiKey: process.env.GIPHY_API_KEY,
    tag: req.query.tag ? req.query.tag : process.env.GIPHY_TAG
  });
  res.send([imgSrc]);
});

module.exports = router;
