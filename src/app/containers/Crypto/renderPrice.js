import numeral from 'numeral';
import PropTypes from 'prop-types';
import React from 'react';

function renderPrice({ amount, color, foregroundColor, name }) {
  const formatted = numeral(amount).format('0,0.00');
  return (
    <div
      className="Price card"
      style={{
        backgroundColor: color,
        color: foregroundColor
      }}
    >
      <div className="card-body">
        <span>
          <span>$</span>
          <span>{formatted.split('.')[0]}</span>
          <span>.{formatted.split('.')[1]}</span>
        </span>
        <small>{name.toUpperCase()} PRICE</small>
      </div>
    </div>
  );
}

renderPrice.propTypes = {
  amount: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  foregroundColor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default renderPrice;
