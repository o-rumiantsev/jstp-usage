'use strict';

const jstp = require('metarhia-jstp');

function eventCallback(interfaceName, eventName, msg) {
  if (interfaceName === 'clientInterface' && eventName === 'msg') {
    console.log(msg);
  }
}

jstp.net.connect('chat', null, 3000, 'localhost', (err, connection) => {
  connection.on('event', eventCallback);

  connection.callMethod('clientInterface', 'messager', ['hello'], (err) => {
    if (err) console.error(err);
  });
});
