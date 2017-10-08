import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: props.imgSrc,
      loading: false,
      progressbarWidth: 100,
      tag: props.tag
    };
  }

  handleOnChange = ev => {
    this.setState({ tag: ev.target.value });
  };

  handleOnClick = () => {
    this.setState({ loading: true, progressbarWidth: 5 });
    fetch(`/api/v1/images?tag=${this.state.tag}`)
      .then(response => response.json())
      .then(data => this.setState({ imgSrc: data[0] }));
  };

  handleOnLoad = () => {
    this.setState({ loading: false, progressbarWidth: 100 });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1>
              WW<span className="first-character">
                [{this.props.who.charAt(0)}]
              </span>D?
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <blockquote className="blockquote">
              <p className="mb-0">{this.props.quote}</p>
            </blockquote>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <img
              src={this.state.imgSrc}
              className="img-fluid border border-dark"
              alt="Powered By GIPHY"
              onError={this.handleOnLoad}
              onLoad={this.handleOnLoad}
            />
          </div>
        </div>
        <div className="row py-2">
          <div className="col-12 text-center">
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  width: `${this.state.progressbarWidth}%`,
                  height: '1px'
                }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center p-2">
            <form>
              <div className="form-row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.tag}
                    onChange={this.handleOnChange}
                  />
                </div>
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.handleOnClick}
                    disabled={this.state.loading}
                  >
                    Moar ...
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              {new Date().getFullYear()} {this.props.name} v{this.props.version}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
  who: PropTypes.string.isRequired
};

export default App;
