import React from 'react';
import PropTypes from 'prop-types';
import OpenWeatherMap from 'react-open-weather-map';
import { links } from './data.json';
import getBackgroundColor from './get-background-color';

const Home = ({ weather }) => (
  <div>
    <div className="row">
      <div className="col-12">
        <h2>Weather</h2>
      </div>
    </div>
    <div className="row">
      {weather.map(item => (
        <div className="col-md-4 col-sm-6 mb-4" key={item.id}>
          <div className="card">
            <div
              className={`card-body weather ${getBackgroundColor(
                item.weather[0]
              )}`}
            >
              <OpenWeatherMap data={item} />
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="row">
      <div className="col-12">
        <h2>Interesting links</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
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
  weather: PropTypes.array.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Home;
