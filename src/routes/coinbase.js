const { Client } = require('coinbase');
const compare = require('compare-function');
const express = require('express');

const client = new Client({
  apiKey: process.env.COINBASE_API_KEY,
  apiSecret: process.env.COINBASE_API_SECRET,
  version: process.env.COINBASE_VERSION
});

const router = express.Router();

router.get('/', (req, res) => {
  client.getAccounts({}, (error, accounts) => {
    if (error) {
      res.render('error', { error, message: error.message });
    } else {
      res.render('coinbase', {
        accounts: accounts.sort(compare(account => account.currency.name))
      });
    }
  });
});

module.exports = router;

// https://developers.coinbase.com/api/v2
// https://github.com/coinbase/coinbase-node
