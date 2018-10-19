import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Crypto from './Crypto';

configure({ adapter: new Adapter() });

const spotPrices = [
  {
    amount: 16503.51,
    code: 'BTC',
    color: '#FFB119',
    currency: 'USD',
    name: 'Bitcoin'
  },
  {
    amount: 2609.98,
    code: 'BCH',
    color: '#8DC451',
    currency: 'USD',
    name: 'Bitcoin Cash'
  },
  {
    amount: 1078.23,
    code: 'ETH',
    color: '#6F7CBA',
    currency: 'USD',
    name: 'Ethereum'
  },
  {
    amount: 278.8,
    code: 'LTC',
    color: '#B5B5B5',
    currency: 'USD',
    name: 'Litecoin'
  }
];

describe.skip('<Crypto />', () => {
  test('to match snapshot', () => {
    const mockPromise = Promise.resolve({
      spotPrices
    });

    jest.mock('../client', () => () => ({ query: jest.fn(() => mockPromise) }));

    const wrapper = mount(<Crypto baseUrl="http://localhost:3000" />);

    return mockPromise
      .then(() => {
        expect(wrapper.debug()).toMatchSnapshot();
        wrapper.update();
      })
      .then(() => {
        expect(wrapper.debug()).toMatchSnapshot();
        wrapper.unmount();
      });
  });
});
