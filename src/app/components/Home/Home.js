import React from 'react';
import PropTypes from 'prop-types';
import TiHome from 'react-icons/lib/ti/home';
import OpenWeatherMap from 'react-open-weather-map';
import getBackgroundColor from '../get-background-color';
import InterestingLinks from '../../components/InterestingLinks/InterestingLinks';

const Home = ({ weather }) => (
  <div>
    <div className="row">
      <div className="col-12">
        <h2>
          <TiHome /> <span className="align-middle">Home</span>
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
    <InterestingLinks />
  </div>
);

Home.propTypes = {
  weather: PropTypes.array.isRequired
};

export default Home;
