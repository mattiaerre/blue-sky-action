import React from 'react';
import PropTypes from 'prop-types';
import TiGlobe from 'react-icons/lib/ti/globe';
import OpenWeatherMap from 'react-open-weather-map';
import getBackgroundColor from '../get-background-color';

const Home = ({ weather }) => (
  <div>
    <div className="row">
      <div className="col-12">
        <h2>
          <TiGlobe /> <span className="align-middle">Kanyini</span>
        </h2>
      </div>
    </div>
    <div className="row">
      {weather.map(item => (
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
  </div>
);

Home.propTypes = {
  weather: PropTypes.array.isRequired
};

export default Home;
