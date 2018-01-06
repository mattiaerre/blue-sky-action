require('dotenv').config();
const middleware = require('../../src/middlewares/graphql');

const query = `
{
  buyPrice(currencyPair: "BTC-USD") {
    amount
    base
    code
    color
    currency
    name
  }
  currencies {
    id
    name
  }
  name
  spotPrices(currency: "USD") {
    amount
    base
    code
    color
    currency
    name
  }
}
`;

it('full query', async () => {
  const req = {
    body: { query },
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  };

  const res = {
    setHeader: jest.fn(),
    end: jest.fn()
  };

  const next = jest.fn();

  await middleware(req, res, next);

  expect(res.setHeader).toBeCalled();

  expect(JSON.parse(res.end.mock.calls.toString())).toMatchSnapshot();
});
