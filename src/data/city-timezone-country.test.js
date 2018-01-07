require('dotenv').config();
const fetch = require('node-fetch');
const home = require('./home.json');

describe.skip('city timezone country', () => {
  Object.keys(home).forEach(key => {
    test(home[key].city.name, async () => {
      const { city } = home[key];
      expect(city).toMatchSnapshot();

      let url = '';

      url = `${process.env.TIMEZONEDB_BASE_URL}/v2/get-time-zone?key=${
        process.env.TIMEZONEDB_API_KEY
      }&format=json&by=position&lat=${city.coord.lat}&lng=${city.coord.lon}`;

      const timezone = await fetch(url).then(response => response.json());
      const copy = Object.assign({}, timezone);
      const { formatted, timestamp, ...rest } = copy;
      console.log(`local time in ${city.name}:`, formatted);

      expect(rest).toMatchSnapshot();

      url = `${process.env.RESTCOUNTRIES_BASE_URL}/rest/v2/alpha/${
        city.country
      }`;

      const coutry = await fetch(url).then(response => response.json());
      expect(coutry).toMatchSnapshot();
    });
  });
});
