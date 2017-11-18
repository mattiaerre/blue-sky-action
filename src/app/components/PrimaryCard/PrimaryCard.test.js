import React from 'react';
import { create } from 'react-test-renderer';
import PrimaryCard from './PrimaryCard';

describe('<PrimaryCard />', () => {
  const props = {
    article: {
      author: 'James Hibberd',
      title:
        '<em>True Detective</em> season 3 casts <em>Fantastic Beasts</em> actress as female lead',
      description: '',
      url: 'http://ew.com/tv/2017/11/17/true-detective-season-3-carmen-ejogo/',
      urlToImage:
        'https://ewedit.files.wordpress.com/2017/11/gettyimages-692777996.jpg?crop=0px%2C0px%2C2700px%2C1417.5px&resize=1200%2C630',
      publishedAt: '2017-11-18T02:30:02Z'
    }
  };
  test.only('to match snapshot', () => {
    const tree = create(<PrimaryCard {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
