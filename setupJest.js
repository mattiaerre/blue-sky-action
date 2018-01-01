const fetch = require('jest-fetch-mock');
const jestMockNow = require('jest-mock-now');

global.fetch = fetch;

const now = new Date('2018-01-01');
jestMockNow(now);
