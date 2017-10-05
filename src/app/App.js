import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleOnClick = () => {
    console.log('Moar ...');
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1>{this.props.name}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <img
              src={this.props.imgSrc}
              className="img-fluid border border-dark"
              alt="Powered By GIPHY"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center p-2">
            <button type="button" className="btn btn-primary" onClick={this.handleOnClick}>
              Moar ...
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              {(new Date()).getFullYear()} {this.props.name} v{this.props.version}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired
};

export default App;
