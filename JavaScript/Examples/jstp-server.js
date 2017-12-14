'use strict';

const jstp = require('metarhia-jstp');
const api1 = {};
const api2 = {};

const interfaces1 = {
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

Object.assign(api1, interfaces1);

const interfaces2 = {
  someInterface: {
    someMethod(connection, callback) {
      console.log('Called method someMethod');
      callback(null, 'someMethod executed');
    }
  }
}

Object.assign(api2, interfaces2);

const app1 = new jstp.Application('jstpApp-1', api1);
const app2 = new jstp.Application('jstpApp-2', api2);
const config = { applications: [app1, app2] };
const server = jstp.net.createServer(config);

server.listen(8080);
server.on('connection', (socket) => {
  console.log('Connection');
});
