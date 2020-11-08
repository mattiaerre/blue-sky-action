const getSpotPrices = require('../../../src/graphql/resolvers/get-spot-prices');
// const currency = require('../../../src/data/currency');

test('to match snapshot', async () => {
  const args = { currency: 'USD' };
  const context = {
    config: { coinbase: { baseUrl: 'https://api.coinbase.com' } }
  };

  const spotPrices = (
    await getSpotPrices(null, args, context)
  ).map(({ amount, ...rest }) => ({ ...rest }));

  expect(spotPrices).toMatchSnapshot();

  // console.log(spotPrices.filter(price => currency[price.base] === undefined));
});
