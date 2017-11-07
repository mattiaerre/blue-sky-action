import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OpenWeatherMap from 'react-open-weather-map';
import getBackgroundColor from './get-background-color';

class WeatherGroup extends Component {
  state = {
    loading: false,
    weather: []
  };

  componentDidMount() {
    this.getWeather();
  }

  getWeather = () => {
    this.setState({ loading: true });
    fetch(`/api/v1/weather?group=${this.props.group}`)
      .then(response => response.json())
      .then(weather => this.setState({ weather, loading: false }));
  };

  render() {
    return (
      <div className="row">
        {this.state.loading && (
          <div className="col-12">
            <h3>Loading ...</h3>
          </div>
        )}
        {!this.state.loading &&
          this.state.weather.map(item => (
            <div className="col-md-4 col-sm-6 mb-4" key={item.id}>
              <div className="card">
                <div
                  className={`card-body weather ${getBackgroundColor(
                    item.weather[0].id
                  )}`}
                >
                  <OpenWeatherMap data={item} />
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

WeatherGroup.propTypes = {
  group: PropTypes.string.isRequired
};

export default WeatherGroup;
