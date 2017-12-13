'use strict';

const jstp = require('metarhia-jstp');

const api = {};
api.clients = new Set();

function messager(connection, msg, callback) {
  const socket = connection.transport.getRawTransport();
  server.getClientsArray().forEach(client =>
    if (client !== socket) {
      client.emitRemoteEvent(
        'clientInterface', 'msg', msg
      );
    }
  );
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

server.on('connection', (socket) => {
  socket.on('end', () => {
    api.clients.delete(socket);
  });
  api.clients.add(socket);
});
