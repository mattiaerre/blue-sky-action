const fetch = require('node-fetch');

async function getSpotPrices(_, args, context) {
  const url = `${context.config.coinbase.baseUrl}/v2/prices/${
    args.currency
  }/spot`;
  return fetch(url)
    .then(response => response.json())
    .then(data => data.data);
}

module.exports = getSpotPrices;
