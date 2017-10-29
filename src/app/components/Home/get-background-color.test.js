import getBackgroundColor from './get-background-color';

describe('getBackgroundColor', () => {
  const scenarios = [
    { description: 'thunderstorm', id: 211 },
    { description: 'light rain', id: 500 },
    { description: 'clear sky', id: 800 },
    { description: 'overcast clouds', id: 804 },
    { description: 'hurricane', id: 902 }
  ];

  scenarios.forEach(({ description, id }) => {
    test(description, () => {
      expect(getBackgroundColor(id)).toMatchSnapshot();
    });
  });
});
