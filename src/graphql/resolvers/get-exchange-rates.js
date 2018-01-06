const { Client } = require('coinbase');

async function getCurrencies(_, args, context) {
  return new Promise((resolve, reject) => {
    const client = new Client(context.config.coinbase.options);

    client.getExchangeRates({ currency: args.currency }, (error, data) => {
      if (error) {
        return reject(error);
      }
      return resolve(data.data);
    });
  });
}

module.exports = getCurrencies;
