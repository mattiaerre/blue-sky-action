import React from 'react';
import PropTypes from 'prop-types';
import { TiHome } from 'react-icons/ti';
import TimeZoneWallClock from '../TimeZoneWallClock/TimeZoneWallClock';
import Crypto from '../../containers/Crypto/Crypto';

const Home = ({ now }) => (
  <div>
    <div className="row">
      <div className="col-12">
        <h2>
          <TiHome /> <span className="align-middle">Home</span>
        </h2>
      </div>
    </div>
    <TimeZoneWallClock now={now} />
    <Crypto />
  </div>
);

Home.propTypes = {
  now: PropTypes.object.isRequired
};

export default Home;
