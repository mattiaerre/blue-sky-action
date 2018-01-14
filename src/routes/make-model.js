const { Pool } = require('pg');
const { name, version } = require('../../package.json');
const index = require('../../dist/bundle').default;
const sources = require('../data/sources');

const LANGUAGE = 'en';
const GB = 'gb';
const US = 'us';

async function makeModel(url, articles) {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const { rows } = await pool.query('SELECT NOW()');
  pool.end();

  const props = {
    articles,
    categories: sources
      .filter(
        source =>
          source.language === LANGUAGE &&
          (source.country === US || source.country === GB)
      )
      .filter(
        source => source.category !== 'politics' && source.category !== 'music'
      )
      .reduce((acc, item) => {
        if (!acc.includes(item.category)) {
          acc.push(item.category);
        }
        return acc;
      }, []),
    name,
    now: rows[0].now,
    sources: sources
      .filter(
        source =>
          source.language === LANGUAGE &&
          (source.country === US || source.country === GB)
      )
      .filter(source => source.id !== 'recode'),
    version,
    weather: []
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
