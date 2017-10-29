import React from 'react';
import PropTypes from 'prop-types';
import OpenWeatherMap from 'react-open-weather-map';
import getBackgroundColor from './get-background-color';

const Home = ({ match, weather }) => (
  <div>
    <div className="row">
      <div className="col-12">
        <h2>{match.path === '/kanyini' ? 'Kanyini' : 'Home'}</h2>
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
  </div>
);

Home.propTypes = {
  match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  weather: PropTypes.array.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Home;
