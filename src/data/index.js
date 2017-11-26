require('dotenv').config();
const fs = require('fs');
const path = require('path');
const fetchSources = require('./fetch-sources');

fetchSources().then(sources => {
  fs.writeFileSync(
    path.join(__dirname, 'sources.json'),
    JSON.stringify(sources, null, 2)
  );
});
