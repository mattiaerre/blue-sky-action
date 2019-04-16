require('dotenv').config();
const middleware = require('../../src/middlewares/graphql');

describe('graphql middleware', () => {
  const scenarios = [
    {
      description: 'query Articles',
      query: `
      query Articles {
        articles(q: "bitcoin") {
          author
          description
          publishedAt
          source {
            id
            name
          }
          title
          url
          urlToImage
        }
      }
      `
    },
    {
      description: 'query BuyPrice',
      propertyMatchers: { data: { buyPrice: { amount: expect.any(Number) } } },
      query: `
      query BuyPrice {
        buyPrice(currencyPair: "BTC-USD") {
          amount
          base
          code
          color
          currency
          name
        }
      }
      `
    },
    {
      description: 'query Currencies',
      query: `
      query Currencies {
        currencies {
          id
          name
        }
      }
      `
    },
    {
      description: 'query ExchangeRates',
      query: `
      query ExchangeRates {
        exchangeRates(currency: "USD") {
          currency
          rates {
            currency
            value
          }
        }
      }
      `
    },
    {
      description: 'query Name',
      query: `
      query Name {
        name
      }
      `
    },
    {
      description: 'query SpotPrices',
      query: `
      query SpotPrices {
        spotPrices(currency: "USD") {
          amount
          base
          code
          color
          currency
          name
        }
      }
      `
    },
    {
      description: 'query TopHeadlines',
      query: `
      query TopHeadlines {
        topHeadlines(source: "cnn") {
          author
          description
          publishedAt
          source {
            id
            name
          }
          title
          url
          urlToImage
        }
      }
      `
    }
  ];

  scenarios.forEach(({ description, propertyMatchers, query }) =>
    it(description, async () => {
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

      expect(JSON.parse(res.end.mock.calls.toString())).toMatchSnapshot(
        propertyMatchers
      );
    })
  );
});
