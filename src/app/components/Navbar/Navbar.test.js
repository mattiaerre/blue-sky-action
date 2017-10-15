import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';
import Navbar from './Navbar';

describe('<Navbar />', () => {
  test('to match snapshot', () => {
    const ENTERTAINMENT = 'entertainment';
    const TECHNOLOGY = 'technology';

    const props = {
      categories: [ENTERTAINMENT, TECHNOLOGY],
      sources: [
        { category: ENTERTAINMENT },
        { category: ENTERTAINMENT },
        { category: TECHNOLOGY }
      ]
    };

    const tree = create(
      <StaticRouter context={{}}>
        <Navbar {...props} />
      </StaticRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
