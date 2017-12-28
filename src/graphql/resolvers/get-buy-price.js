const { Client } = require('coinbase');

const client = new Client({
  apiKey: process.env.COINBASE_API_KEY,
  apiSecret: process.env.COINBASE_API_SECRET,
  version: process.env.COINBASE_VERSION
});

async function getBuyPrice() {
  return new Promise((resolve, reject) => {
    client.getBuyPrice({ currencyPair: 'BTC-USD' }, (error, data) => {
      if (error) {
        return reject(error);
      }
      return resolve(data.data);
    });
  });
}

module.exports = getBuyPrice;
