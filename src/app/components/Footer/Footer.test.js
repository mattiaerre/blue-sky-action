import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './Footer';

test('<Footer />', () => {
  const props = {
    name: 'red-ribbon-army',
    version: '2.0.0'
  };

  const tree = renderer.create(<Footer {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
