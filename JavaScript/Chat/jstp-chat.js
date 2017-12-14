'use strict';

const fs = require('fs');
const jstp = require('metarhia-jstp');
const readline = require('readline');

let connection;
let username;

function eventCallback(interfaceName, eventName, msg) {
  if (interfaceName === 'clientInterface' && eventName === 'msg') {
    console.log(msg);
  }
}

function connectionClose() {
  connection.callMethod('clientInterface', 'close', [], (err) => {
    if (err) console.error(err.message);
  });
  connection.close();
  rl.close();
}

function sendMsg(msg) {
  connection.callMethod(
    'clientInterface', 'messager', msg, (err) => {
      if (err) console.error(err);
    }
  );
}

function sendFile(filenames) {
  filenames.forEach(filename => {
    const file = fs.readFileSync('./' + filename, 'utf8');
    connection.callMethod(
      'clientInterface', 'catchFile', [filename, file], (err) => {
        if (err) console.error(err.message);
      }
    );
  });
}

jstp.net.connect('chat', null, 3000, 'localhost', (err, conn) => {
  conn.on('event', eventCallback);
  conn.on('close', () => {
    console.log('Connection closed');
    rl.close();
  });
  conn.callMethod('clientInterface', 'connectionListener', [], (err) => {
    if (err) console.error(err);
  });
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
  if (line === 'exit') {
    connectionClose();
  } else if (line.startsWith('send ')) {
    const filenames = line.split(' ').slice(1);
    sendFile(filenames);
    rl.prompt();
  } else {
    const msg = [username, line];
    sendMsg(msg);
    rl.prompt();
  }
});
