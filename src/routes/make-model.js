const { name, version } = require('../../package.json');
const index = require('../../dist/bundle').default;
const sources = require('../data/sources');

async function makeModel(req, articles, weather) {
  const props = {
    articles,
    categories: sources
      .filter(source => source.language === 'en' && source.country === 'us')
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
    sources: sources.filter(
      source => source.language === 'en' && source.country === 'us'
    ),
    version,
    weather
  };

  const app = index(req, props);
  const model = {
    app,
    props,
    title: name,
    trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID
  };
  return model;
}

module.exports = makeModel;
