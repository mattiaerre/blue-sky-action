const currency = require('../../src/data/currency');

// SOURCE: https://www.coinbase.com/price

test('validate', () => {
  Object.keys(currency).forEach(key => {
    expect(currency[key].color).toEqual(currency[key].color.toUpperCase());
    expect(['black', 'white'].includes(currency[key].foregroundColor)).toBe(
      true
    );
    expect({ key, name: currency[key].name }).toMatchSnapshot();
  });
});
