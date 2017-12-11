'use strict';

const jstp = require('metarhia-jstp');
const { flow } = require('metasync');
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

function stopThisShit(connection, server) {
  connection.close();
  connection = null;
  server.close();
}

jstp.net.connect('jstpApp', null, 8080, 'localhost', (err, conn) => {
  conn.callMethod('number', 'fortytwo', [], (err, result) => {
    console.log(result);
  });
  stopThisShit(conn, server);
});
