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
        description: 'So many side fringes.',
        title: "19 '00s Hair Styles That Were Cool Then, But Are Cringey Now",
        url:
          'https://www.buzzfeed.com/tabathaleggett/19-00s-hairstyles-that-were-cool-then-but-are-cringey-now'
      },
      {
        description: '"She said yes."',
        title:
          'Holy Crap, There Are Going To Be Two "GoT" Weddings Soon Because Sophie Turner And Joe Jonas Just Got Engaged!',
        url:
          'https://www.buzzfeed.com/shylawatson/holy-crap-there-are-going-to-be-two-got-weddings-soon'
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
