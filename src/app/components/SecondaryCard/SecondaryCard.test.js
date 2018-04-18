import React from 'react';
import { create } from 'react-test-renderer';
import SecondaryCard from './SecondaryCard';

describe('<SecondaryCard />', () => {
  const props = {
    article: {
      description:
        'Your daily roundup of the biggest TechCrunch stories and startup news.',
      publishedAt: '2017-10-31T20:00:33Z',
      title: 'Crunch Report',
      url: 'https://techcrunch.com/video/crunchreport/'
    }
  };
  test.only('to match snapshot', () => {
    const tree = create(<SecondaryCard {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
