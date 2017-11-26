const fetchArticles = require('./fetch-articles');

// todo: not much value

async function makeArticles(source) {
  return fetchArticles({
    source
  });
}

module.exports = makeArticles;
