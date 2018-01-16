const moment = require('moment-timezone');
const { Pool } = require('pg');
const { name, version } = require('../../package.json');
const index = require('../../dist/bundle').default;
const sources = require('../data/sources');

const LANGUAGE = 'en';
const GB = 'gb';
const US = 'us';

async function makeModel(url, articles, datetime) {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const { rows } = await pool.query('SELECT NOW()');
  pool.end();

  let nowClient;
  if (datetime) {
    nowClient = moment(datetime.date_time_ymd)
      .tz(datetime.offset_tzid)
      .format();
  } else {
    nowClient = moment().format();
  }

  const props = {
    articles,
    categories: sources
      .filter(
        source =>
          source.language === LANGUAGE &&
          (source.country === US || source.country === GB)
      )
      .reduce((acc, item) => {
        if (!acc.includes(item.category)) {
          acc.push(item.category);
        }
        return acc;
      }, []),
    name,
    now: {
      client: nowClient,
      server: moment(rows[0].now).format()
    },
    sources: sources.filter(
      source =>
        source.language === LANGUAGE &&
        (source.country === US || source.country === GB)
    ),
    version
  };

  const app = index(url, props);
  const model = {
    app,
    props,
    title: name,
    trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID
  };
  return model;
}

module.exports = makeModel;
