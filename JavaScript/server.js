'use strict';

const jstp = require('metarhia-jstp');
const app = require('./app.js');

const config = { applications: [app] };

const server = jstp.net.createServer(config);
server.listen(3000);
