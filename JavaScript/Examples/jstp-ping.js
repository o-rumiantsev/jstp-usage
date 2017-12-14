'use strict';

const jstp = require('metarhia-jstp');

jstp.net.connect('jstpApp-1', null, 8080, 'localhost', (err, conn) => {

  conn.startHeartbeat(1000);
  conn.on('heartbeat', (data) => {
    conn.ping(() => {
      console.log('ping', data);
    });
  });
});
