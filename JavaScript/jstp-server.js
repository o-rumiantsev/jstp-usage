'use strict';

const jstp = require('metarhia-jstp');
const api = {};

const interfaces = {
  operator: {
    add(connection, [...args], callback) {
      const result = args.reduce((acc, val) => acc + val);
      console.log('Called method add');
      callback(null, result);
    },
    subtr(connection, args, callback) {
      const result = args.reduce((acc, val) => val - acc);
      console.log('Called method subtr');
      callback(null, result);
    }
  },
  speaker: {
    sayFuck(connection, callback) {
      console.log('Called method sayFuck');
      callback(null, 'fuck');
    },
    sayHello(connection, callback) {
      console.log('Called method sayHello');
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
