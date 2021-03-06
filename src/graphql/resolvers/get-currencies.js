const { Client } = require('coinbase');

// const crypto = ['BTC', 'BCH', 'ETH', 'LTC'];

async function getCurrencies(_, __, context) {
  return new Promise((resolve, reject) => {
    const client = new Client(context.config.coinbase.options);

    client.getCurrencies((error, data) => {
      if (error) {
        return reject(error);
      }
      return resolve(data.data);
    });
  });
}

module.exports = getCurrencies;
