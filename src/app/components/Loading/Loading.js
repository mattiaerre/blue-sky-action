import React from 'react';
import PropTypes from 'prop-types';

const getWidth = loading => {
  const data = [25, 50, 75];
  if (loading) {
    return data[Math.floor(Math.random() * data.length)];
  }
  return 100;
};

const Loading = ({ loading }) => {
  const width = getWidth(loading);
  return (
    <div className="row">
      <div className="col-12">
        <div className="progress" style={{ height: '5px' }}>
          <div
            className={`progress-bar w-${width}`}
            role="progressbar"
            aria-valuenow={width}
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
      </div>
    </div>
  );
};

Loading.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Loading;
