const getIpAddress = req => {
  if (process.env.ENVIRONMENT === 'local') {
    return process.env.IP;
  }
  return req.headers['x-forwarded-for'] || req.connection.remoteAddress;
};

module.exports = getIpAddress;
