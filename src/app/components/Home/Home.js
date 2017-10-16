import React from 'react';
import PropTypes from 'prop-types';
import OpenWeatherMap from 'react-open-weather-map';
import { links } from './data.json';

const Home = ({ weather }) => (
  <div className="row">
    <div className="col-12">
      <h2>Weather</h2>
      <OpenWeatherMap data={weather} />
      <h2>Interesting links</h2>
      <ul className="list-unstyled">
        {Object.keys(links).map(key => (
          <li key={key}>
            <a href={links[key].url} target="_blank" rel="noopener noreferrer">
              {links[key].label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

Home.propTypes = {
  weather: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Home;
