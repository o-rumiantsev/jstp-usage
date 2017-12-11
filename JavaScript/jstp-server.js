'use strict';

const jstp = require('metarhia-jstp');
const api = {};

api.number = {
  fortytwo(connection, callback) {
    callback(null, 42);
  }
}

const app = new jstp.Application('jstpApp', api);
const config = { applications: [app] };
const server = jstp.net.createServer(config);

server.listen(8080);
