const { Client } = require('coinbase');

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
