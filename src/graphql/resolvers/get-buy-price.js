const { Client } = require('coinbase');

async function getBuyPrice(_, args, context) {
  return new Promise((resolve, reject) => {
    const client = new Client(context.config.coinbase.options);

    client.getBuyPrice({ currencyPair: args.currencyPair }, (error, data) => {
      if (error) {
        return reject(error);
      }
      return resolve(data.data);
    });
  });
}

module.exports = getBuyPrice;
