import React from 'react';
import PropTypes from 'prop-types';
import TiHome from 'react-icons/lib/ti/home';
import WeatherGroup from '../../containers/WeatherGroup/WeatherGroup';
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
    <WeatherGroup weather={weather} />
    <InterestingLinks />
  </div>
);

Home.propTypes = {
  weather: PropTypes.array.isRequired
};

export default Home;
