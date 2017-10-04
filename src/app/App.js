import React from 'react';

const App = ({ name, version }) => { // eslint-disable-line
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1>{name}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          Insert content here ...
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="text-center">
            {(new Date()).getFullYear()} {name} v{version}
          </div>
        </div>
      </div>
    </div>
  );
};

module.exports = App;
