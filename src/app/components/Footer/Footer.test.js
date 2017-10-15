import React from 'react';
import { create } from 'react-test-renderer';
import Footer from './Footer';

describe('<Footer />', () => {
  test('to match snapshot', () => {
    const props = {
      name: 'red-ribbon-army',
      version: '2.0.0'
    };

    const tree = create(<Footer {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
