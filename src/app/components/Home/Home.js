import React from 'react';
import PropTypes from 'prop-types';
import { TiHome } from 'react-icons/ti';
import TimeZoneWallClock from '../TimeZoneWallClock/TimeZoneWallClock';
import Crypto from '../../containers/Crypto/Crypto';

const Home = ({ baseUrl, now }) => (
  <div>
    <div className="row">
      <div className="col-12">
        <h2>
          <TiHome className="align-middle" />{' '}
          <span className="align-middle">Home</span>
        </h2>
      </div>
    </div>
    <TimeZoneWallClock now={now} />
    <Crypto baseUrl={baseUrl} />
  </div>
);

Home.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  now: PropTypes.object.isRequired
};

export default Home;
