import React from 'react';
import moment from 'moment';
import TiGlobe from 'react-icons/lib/ti/globe';
import WeatherGroup from '../../containers/WeatherGroup/WeatherGroup';

const Kanyini = () => (
  <div>
    <div className="row">
      <div className="col-12">
        <h2>
          <TiGlobe /> <span className="align-middle">Kanyini</span>{' '}
          <small className="text-muted align-middle">
            {moment().to([2018, 0, 28])}
          </small>
        </h2>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <p className="m-2">
          <a
            href="https://remoteyear.com/itineraries/kanyini"
            rel="noopener noreferrer"
            target="_blank"
          >
            Itinerary
          </a>
        </p>
      </div>
    </div>
    <WeatherGroup group="kanyini" />
  </div>
);

export default Kanyini;
