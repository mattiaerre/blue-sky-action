import React from 'react';
import moment from 'moment-timezone';
import { StaticRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';
import App from './App';

describe('<App />', () => {
  // see: https://stackoverflow.com/questions/41570273/how-to-test-a-function-that-output-is-random-using-jest
  const mockMath = Object.create(global.Math);
  mockMath.random = () => 0.5;
  global.Math = mockMath;

  const nullWeather = {
    id: 0,
    main: {},
    sys: {},
    weather: [{ icon: '' }]
  };

  const articles = [
    {
      description:
        'Your daily roundup of the biggest TechCrunch stories and startup news.',
      publishedAt: '2017-10-31T20:00:33Z',
      title: 'Crunch Report',
      url: 'https://techcrunch.com/video/crunchreport/'
    },
    {
      description:
        "It's impossible to know just how much stuff being circulated on social networks is Russian state content in sheep's clothing, although tech companies are..",
      publishedAt: '2017-11-01T23:49:18Z',
      title:
        'Here’s how Russia targeted its fake Facebook ads and how those ads performed',
      url:
        'https://techcrunch.com/2017/11/01/list-russian-ads-facebook-instagram/'
    }
  ];

  const props = {
    articles: [],
    baseUrl: 'http://localhost:3000',
    categories: [],
    name: '',
    now: {
      client: moment().format(),
      server: moment().format()
    },
    sources: [
      {
        category: 'entertainment',
        id: 'buzzfeed',
        name: 'Buzzfeed'
      }
    ],
    version: '',
    weather: [nullWeather]
  };

  const scenarios = [
    {
      location: '/',
      mock: () => fetch.mockResponseOnce(JSON.stringify([nullWeather]))
    },
    {
      location: '/blog',
      mock: () => fetch.mockResponseOnce(JSON.stringify({ post: { url: '' } }))
    },
    {
      location: '/blog/namaste',
      mock: () => fetch.mockResponseOnce(JSON.stringify({ post: { url: '' } }))
    },
    {
      location: '/entertainment/buzzfeed',
      mock: () => fetch.mockResponseOnce(JSON.stringify(articles))
    }
  ];

  scenarios.forEach(({ location, mock }) => {
    describe(`location === "${location}"`, () => {
      test('to match snapshot', () => {
        mock();
        const tree = create(
          <StaticRouter location={location} context={{}}>
            <App {...props} />
          </StaticRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
