import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OpenWeatherMap from 'react-open-weather-map';
import getBackgroundColor from './get-background-color';

class WeatherGroup extends Component {
  state = {
    weather: this.props.weather
  };

  render() {
    return (
      <div className="row">
        {this.state.weather.map(item => (
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
  weather: PropTypes.array.isRequired
};

export default WeatherGroup;
