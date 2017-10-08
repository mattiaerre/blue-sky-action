const fetchImgSrc = require('./fetch-img-src');
const { name, version } = require('../../package.json');
const index = require('../../dist/bundle').default;

async function makeModel(req) {
  const tag = process.env.GIPHY_TAG;

  const imgSrc = await fetchImgSrc({
    apiKey: process.env.GIPHY_API_KEY,
    baseUrl: process.env.GIPHY_BASE_URL,
    tag
  });

  const props = {
    imgSrc,
    name,
    quote: process.env.QUOTE,
    tag,
    version,
    who: process.env.WHO
  };

  const app = index(req, props);
  const model = { app, props, title: name };
  return model;
}

module.exports = makeModel;
