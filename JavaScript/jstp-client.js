'use strict';

const jstp = require('metarhia-jstp');

jstp.net.connect('jstpApp', null, 8080, 'localhost', (err, conn) => {
  conn.callMethod('number', 'fortytwo', [], (err, result) => {
    console.log(result);
  });
  stopThisShit(conn);
});

function stopThisShit(connection, server) {
  connection.close();
  connection = null;
}
