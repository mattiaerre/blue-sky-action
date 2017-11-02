import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';
import App from './App';

describe('<App />', () => {
  const nullWeather = {
    id: 0,
    main: {},
    sys: {},
    weather: [{ icon: '' }]
  };

  fetch.mockResponse(
    JSON.stringify([
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
    ])
  );

  const props = {
    articles: [],
    categories: [],
    name: '',
    sources: [
      {
        category: 'entertainment',
        id: 'buzzfeed',
        name: 'Buzzfeed'
      }
    ],
    version: '',
    weather: { home: [nullWeather], kanyini: [nullWeather] }
  };

  const scenarios = [
    {
      location: '/'
    },
    {
      location: '/kanyini'
    },
    {
      location: '/entertainment'
    },
    {
      location: '/entertainment/buzzfeed'
    }
  ];

  scenarios.forEach(({ location }) => {
    describe('location === "/"', () => {
      test('to match snapshot', () => {
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
