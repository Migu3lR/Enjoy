const server = require('./webpack/webpack.server.config.js');
const client = require('./webpack/webpack.client.config.js');
const services = require('./webpack/webpack.services.config.js');

module.exports = [
  server,
  client,
  services,
];
