const fetchArticles = require('../../routes/fetch-articles');

const getTopHeadlines = (_, args) => fetchArticles({ source: args.source });

module.exports = getTopHeadlines;
