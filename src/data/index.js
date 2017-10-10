require('dotenv').config();
const fs = require('fs');
const path = require('path');
const fetchSources = require('../routes/fetch-sources');

fetchSources({ baseUrl: process.env.NEWSAPI_BASE_URL }).then(sources => {
  fs.writeFileSync(
    path.join(__dirname, 'sources.json'),
    JSON.stringify(sources, null, 2)
  );
});
