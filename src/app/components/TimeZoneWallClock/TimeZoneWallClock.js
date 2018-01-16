import React from 'react';
import moment from 'moment-timezone'; // https://momentjs.com/timezone/
import PropTypes from 'prop-types';
import cities from '../../../data/cities.json';

const format = 'ddd, MMM DD HH:mm';

const isSameTimezone = (city, now) => {
  if (
    moment(now.client)
      .tz(city.tzid)
      .format() === now.client
  ) {
    return true;
  }
  if (
    moment(now.client)
      .tz(city.tzid)
      .format()
      .substring(19, 1) === 'Z' &&
    now.client.substring(19, 6) === '+00:00'
  ) {
    return true;
  }
  return false;
};

const getZone = (city, now) =>
  `${moment(now.client)
    .tz(city.tzid)
    .format('Z')}`;

const makeModel = now =>
  Object.keys(cities).reduce(
    (accumulator, key) => {
      const copy = Object.assign({}, accumulator);
      const city = cities[key];
      let bg = 'bg-secondary';
      if (isSameTimezone(city, now)) {
        bg = 'bg-primary';
        copy.zone = getZone(city, now);
      }
      const time = `${moment(now.client)
        .tz(city.tzid)
        .format(format)}`;
      const item = Object.assign({}, city, {
        className: `card text-light ${bg}`,
        id: key,
        time,
        zone: getZone(city, now)
      });
      copy.items.push(item);
      return copy;
    },
    { items: [], zone: '+00:00' }
  );

const getInteger = zone => {
  const sign = zone.substring(0, 1);
  const hour = zone.substring(1, 3);
  return parseInt(`${sign}${hour}`, 10);
};

const getDelta = (a, b) => {
  const delta = getInteger(a) - getInteger(b);
  if (delta > 0) {
    return `+${delta}`;
  }
  if (delta < 0) {
    return `${delta}`;
  }
  return '';
};

const TimeZoneWallClock = ({ now }) => {
  const { items, zone } = makeModel(now);
  return (
    <div className="row">
      {items.map(item => (
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={item.id}>
          <div className={item.className}>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">
                {item.time} {getDelta(item.zone, zone)}
              </p>
              <p>
                {moment(now.client)
                  .tz(item.tzid)
                  .format()}
              </p>
              <p>{now.client}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

TimeZoneWallClock.propTypes = {
  now: PropTypes.object.isRequired
};

export default TimeZoneWallClock;
