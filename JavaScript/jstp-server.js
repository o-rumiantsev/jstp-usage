'use strict';

const jstp = require('metarhia-jstp');
const api = {};

const interfaces = {
  operator: {
    add(connection, [...args], callback) {
      const result = args.reduce((acc, val) => acc + val);
      callback(null, result);
    },
    subtr(connection, args, callback) {
      const result = args.reduce((acc, val) => val - acc);
      callback(null, result);
    }
  },
  speaker: {
    sayFuck(connection, callback) {
      callback(null, 'fuck');
    },
    sayHello(connection, callback) {
      callback(null, 'hello');
    }
  }
}

Object.assign(api, interfaces);

const app = new jstp.Application('jstpApp', api);
const config = { applications: [app] };
const server = jstp.net.createServer(config);

server.listen(8080);
server.on('connection', (socket) => {
  console.log('Connection');
});
