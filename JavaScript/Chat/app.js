'use strict';

const jstp = require('metarhia-jstp');
const api = require('./api.js');

const app = new jstp.Application('chat', api);

module.exports = app;
