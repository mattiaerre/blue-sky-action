import React from 'react';

const App = ({ name, version, imgSrc }) => { // eslint-disable-line
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1>{name}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <img src={imgSrc} className="img-fluid border border-dark" alt="Powered By GIPHY" />
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
