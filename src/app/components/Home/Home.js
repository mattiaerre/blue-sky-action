import React from 'react';
import PropTypes from 'prop-types';
import OpenWeatherMap from 'react-open-weather-map';
import { links } from './data.json';

// https://openweathermap.org/weather-conditions
// https://getbootstrap.com/docs/4.0/utilities/colors/#background-color
const getBackgroundColor = ({ id }) => {
  if (id < 300) {
    return 'bg-danger'; // red
  }
  if (id < 800) {
    return 'bg-warning'; // yellow
  }
  if (id === 800) {
    return 'bg-success'; // green
  }
  if (id < 900) {
    return 'bg-warning'; // yellow
  }
  if (id < 950) {
    return 'bg-danger'; // red
  }
  return 'bg-info'; // blue
};

const Home = ({ weather }) => (
  <div>
    <div className="row">
      <div className="col-12">
        <h2>Weather</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-6 mb-4">
        <div className="card">
          <div
            className={`card-body ${getBackgroundColor(
              weather.sanFrancisco.weather[0]
            )}`}
          >
            <OpenWeatherMap data={weather.sanFrancisco} />
          </div>
        </div>
      </div>
      <div className="col-sm-6 mb-4">
        <div className="card">
          <div
            className={`card-body ${getBackgroundColor(
              weather.london.weather[0]
            )}`}
          >
            <OpenWeatherMap data={weather.london} />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <h2>Interesting links</h2>
        <ul className="list-unstyled">
          {Object.keys(links).map(key => (
            <li key={key}>
              <a
                href={links[key].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {links[key].label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

Home.propTypes = {
  weather: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Home;
