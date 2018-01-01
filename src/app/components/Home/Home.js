import React from 'react';
import TiHome from 'react-icons/lib/ti/home';
import WeatherGroup from '../../containers/WeatherGroup/WeatherGroup';
import Crypto from '../../containers/Crypto/Crypto';

const Home = () => (
  <div>
    <div className="row">
      <div className="col-12">
        <h2>
          <TiHome /> <span className="align-middle">Home</span>
        </h2>
      </div>
    </div>
    <Crypto />
    <WeatherGroup group="" />
  </div>
);

export default Home;
