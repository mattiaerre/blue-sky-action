const BLACK = '#000000'; // 0
const WHITE = '#FFFFFF'; // 16777215

function maxContrast(color = WHITE) {
  if (color.toUpperCase() === BLACK) {
    return WHITE;
  }
  if (color.toUpperCase() === WHITE) {
    return BLACK;
  }

  const value = parseInt(`0x${color.replace('#', '')}`, 16);
  const fromBlack = value - parseInt(`0x${BLACK.replace('#', '')}`, 16);
  const fromWhite = parseInt(`0x${WHITE.replace('#', '')}`, 16) - value;

  if (fromBlack > fromWhite) {
    return BLACK;
  }
  return WHITE;
}

module.exports = { BLACK, WHITE, maxContrast };
