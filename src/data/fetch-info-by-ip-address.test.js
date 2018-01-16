// https://timezoneapi.io/api/ip/?ip=66.220.144.0

require('dotenv').config();
const fetch = require('node-fetch');

const scenarios = [
  '2601:646:103:3170:e5e4:1b28:f1cc:6e74',
  '204.148.101.50',
  '185.86.151.11',
  '219.93.183.103',
  '73.202.174.69',
  '174.215.17.217'
];

describe('fetch info by ip address', () => {
  scenarios.map(scenario =>
    test(scenario, async () => {
      const url = `${process.env.TIMEZONEAPI_BASE_URL}/api/ip/?ip=${scenario}`;
      const timezone = await fetch(url)
        .then(response => response.json())
        .then(({ data }) => data);

      expect(timezone).toMatchSnapshot();
    })
  );
});
