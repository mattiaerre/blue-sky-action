import React from 'react';
import TiGlobe from 'react-icons/lib/ti/globe';
import WeatherGroup from '../../containers/WeatherGroup/WeatherGroup';

const Home = () => (
  <div>
    <div className="row">
      <div className="col-12">
        <h2>
          <TiGlobe /> <span className="align-middle">Kanyini</span>
        </h2>
      </div>
    </div>
    <WeatherGroup group="kanyini" />
  </div>
);

export default Home;
