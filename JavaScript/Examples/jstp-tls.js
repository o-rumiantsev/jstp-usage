'use strict';

const fs = require('fs');
const jstp = require('metarhia-jstp');
const wss = jstp.wss;

const key = fs.readFileSync('./cert/test-key', 'utf8');
const cert = fs.readFileSync('./cert/test-cert', 'utf8');

const api = {
  someInterface: {
    method(connection, callback) {
      console.log('method called');
      callback(null);
    }
  }
};

const app = new jstp.Application('wssApp', api);
const config = { applications: [app], key, cert };

const server = wss.createServer(config, (ws) => {
  console.log('ws connected');
});

server.listen(3000, () => {
  console.log('server bound', 3000);
});


wss.connect(
  'wssApp',
  null,
  null,
  'wss://localhost:3000',
  (err, conn) => {
    if (err) console.error(err.message);
    console.log('connected');
  }
);
