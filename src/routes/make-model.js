const { name, version } = require('../../package.json');
const index = require('../../dist/bundle').default;

async function makeModel(req, articles) {
  const props = {
    articles,
    name,
    version
  };

  const app = index(req, props);
  const model = { app, props, title: name };
  return model;
}

module.exports = makeModel;
