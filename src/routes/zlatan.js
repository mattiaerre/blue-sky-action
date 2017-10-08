const express = require('express');
const makeModel = require('./make-model');

const router = express.Router();

router.get('/', async (req, res) => {
  const model = await makeModel(res);
  res.render('index', model);
});

module.exports = router;
