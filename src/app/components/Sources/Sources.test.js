import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';
import Sources from './Sources';

describe('<Sources />', () => {
  test('to match snapshot', () => {
    const props = {
      category: 'entertainment',
      sources: [
        {
          category: 'entertainment',
          id: 'buzzfeed',
          name: 'Buzzfeed'
        }
      ]
    };

    const tree = create(
      <StaticRouter context={{}}>
        <Sources {...props} />
      </StaticRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
