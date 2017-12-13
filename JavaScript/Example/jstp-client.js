'use strict';

const jstp = require('metarhia-jstp');

jstp.net.connect('jstpApp-1', null, 8080, 'localhost', (err, conn) => {
  const args = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  conn.callMethod('operator', 'add', [args], (err, result) => {
    if (err) console.error(err.message);
    console.log('add:', result);
  });

  conn.callMethod('operator', 'subtr', [args], (err, result) => {
    if (err) console.error(err.message);
    console.log('subtr:', result);
  });

  conn.callMethod('speaker', 'sayFuck', [], (err, answer) => {
    console.log(answer);
  });

  conn.callMethod('speaker', 'sayHello', [], (err, answer) => {
    console.log(answer);
  });

  stopThisShit(conn);
});

jstp.net.connect('jstpApp-2', null, 8080, 'localhost', (err, conn) => {

  conn.callMethod('someInterface', 'someMethod', [], (err, result) => {
    console.log(result);
  });

  stopThisShit(conn);
});

function stopThisShit(connection, server) {
  connection.close();
  connection = null;
}
