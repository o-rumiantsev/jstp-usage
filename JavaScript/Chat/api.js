'use strict';

const api = {};
api.connections = new Set();

function messager(connection, username, msg, callback) {
  msg = `${username}: ${msg}`;
  api.connections.forEach(conn => {
    if (conn !== connection) {
      conn.emitRemoteEvent(
        'clientInterface', 'msg', msg
      );
    }
  });
  callback(null);
}

function connectionListener(connection, callback) {
  console.log('incomming connection');
  api.connections.add(connection);
  callback(null);
}

function close(connection, callback) {
  console.log('connection closed');
  api.connections.delete(connection);
  callback(null);
}

const interfaces = {
  clientInterface: {
    messager,
    connectionListener,
    close
  }
};

Object.assign(api, interfaces);

module.exports = api;
