'use strict';

const jstp = require('metarhia-jstp');
const readline = require('readline');

let connection;
let username;

function eventCallback(interfaceName, eventName, msg) {
  if (interfaceName === 'clientInterface' && eventName === 'msg') {
    console.log(msg);
  }
}

jstp.net.connect('chat', null, 3000, 'localhost', (err, conn) => {
  conn.on('event', eventCallback);
  connection = conn;
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: ''
});

rl.question('Username: ', (name) => {
  username = name;
  rl.prompt();
});

rl.on('line', (line) => {
  connection.callMethod(
    'clientInterface', 'messager', [username, line], (err) => {
      if (err) console.error(err);
    }
  );
  rl.prompt();
});
