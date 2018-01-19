const sources = require('../../data/sources.json');

const getSources = (_, args) =>
  sources
    .filter(source => source.language === 'en')
    .filter(source => source.name.toLowerCase().includes(args.q.toLowerCase()));

module.exports = getSources;
