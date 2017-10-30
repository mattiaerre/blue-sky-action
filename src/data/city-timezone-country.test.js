import { config } from 'dotenv';
import moment from 'moment';
import fetch from 'node-fetch';
import home from './home.json';

config();

describe('city timezone country', () => {
  Object.keys(home).forEach(key => {
    test(home[key].city.name, async () => {
      const now = moment().format('YYYY-MM-DD HH:mm:ss');
      expect(now).toMatchSnapshot();

      const { city } = home[key];
      expect(city).toMatchSnapshot();

      let url = '';

      url = `${process.env.TIMEZONEDB_BASE_URL}/v2/get-time-zone?key=${process
        .env.TIMEZONEDB_API_KEY}&format=json&by=position&lat=${city.coord
        .lat}&lng=${city.coord.lon}`;
      expect(url).toMatchSnapshot();

      const timezone = await fetch(url).then(response => response.json());
      expect(timezone).toMatchSnapshot();

      url = `${process.env
        .RESTCOUNTRIES_BASE_URL}/rest/v2/alpha/${timezone.countryCode}`;
      expect(url).toMatchSnapshot();

      const coutry = await fetch(url).then(response => response.json());
      expect(coutry).toMatchSnapshot();
    });
  });
});
