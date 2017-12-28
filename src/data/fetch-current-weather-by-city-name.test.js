import { config } from 'dotenv';
import fetch from 'node-fetch';

config();

const CITY_NAME = 'Las Vegas';

describe.skip('fetch current weather by city name', () => {
  test(CITY_NAME, async () => {
    const url = `${
      process.env.OPEN_WEATHER_MAP_BASE_URL
    }/data/2.5/weather?q=${CITY_NAME}&appid=${
      process.env.OPEN_WEATHER_MAP_API_KEY
    }`;
    const weather = await fetch(url)
      .then(response => response.json())
      .then(data => data);

    expect(weather).toMatchSnapshot();
  });
});
