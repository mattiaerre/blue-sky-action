const debug = require('debug')('blue-sky-action:routes/make-model');
const moment = require('moment-timezone');
const { Pool } = require('pg');
const { name, version } = require('../../package.json');
const index = require('../../dist/bundle').default;
const sources = require('../data/sources');

const LANGUAGE = 'en';
const GB = 'gb';
const US = 'us';

async function makeModel({ articles, baseUrl, datetime, url }) {
  let now = moment().format();
  try {
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    const { rows } = await pool.query('SELECT NOW()');
    now = moment(rows[0].now).format();
    pool.end();
  } catch (error) {
    console.log('error:', error);
    debug(error);
  }

  let nowClient;
  if (datetime) {
    nowClient = moment(datetime.current_time)
      .tz(datetime.name)
      .format();
  } else {
    nowClient = moment().format();
  }

  const props = {
    articles,
    baseUrl,
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
      server: now
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
