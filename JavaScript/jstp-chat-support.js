'use strict';

const jstp = require('metarhia-jstp');

const api = {};

function messager(connection, username, msg, callback) {
  msg = `${username}: ${msg}`;
  server.getClientsArray().forEach(client => {
    if (client !== connection) {
      client.emitRemoteEvent(
        'clientInterface', 'msg', msg
      );
    }
  });
  callback(null);
}

const interfaces = {
  clientInterface: {
    messager
  }
};

Object.assign(api, interfaces);

const app = new jstp.Application('chat', api);
const config = { applications: [app] };

const server = jstp.net.createServer(config);
server.listen(3000);
