import React from 'react';
import TiGlobe from 'react-icons/lib/ti/globe';
import TiHome from 'react-icons/lib/ti/home';
import PropTypes from 'prop-types';
import OpenWeatherMap from 'react-open-weather-map';
import getBackgroundColor from './get-background-color';
import InterestingLinks from '../../components/InterestingLinks/InterestingLinks';

const Home = ({ match, weather }) => {
  const isKanyini = match.path === '/kanyini';
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h2>
            {isKanyini ? <TiGlobe /> : <TiHome />}{' '}
            <span className="align-middle">
              {isKanyini ? 'Kanyini' : 'Home'}
            </span>
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
      {!isKanyini && <InterestingLinks />}
    </div>
  );
};

Home.propTypes = {
  match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  weather: PropTypes.array.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Home;
