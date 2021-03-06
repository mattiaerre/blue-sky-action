const { BLACK, WHITE, maxContrast } = require('../../src/data/maxContrast');

const scenarios = [
  {
    background: BLACK,
    descrition: 'white on black',
    foreground: WHITE
  },
  {
    background: WHITE,
    descrition: 'black on white',
    foreground: BLACK
  },
  {
    background: '#ffffff',
    descrition: 'black on white (lower)',
    foreground: BLACK
  },
  {
    background: '#4CAF50',
    descrition: 'white on green',
    foreground: WHITE
  }
];

scenarios.forEach(({ background, descrition, foreground }) => {
  test(descrition, () => {
    expect(maxContrast(background)).toEqual(foreground);
  });
});
