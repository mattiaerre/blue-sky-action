const { GraphQLString } = require('graphql');
const getIpAddress = require('../../../../routes/get-ip-address');

const ip = {
  resolve: (_, __, { req }) => getIpAddress(req),
  type: GraphQLString
};

module.exports = ip;
