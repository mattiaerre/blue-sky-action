import React from 'react';

const App = ({ name, version }) => { // eslint-disable-line
  return (
    <div>
      <small>{(new Date()).getFullYear()} {name} v{version}</small>
    </div>
  );
};

module.exports = App;
