'use strict';

const fs = require('fs');
const jstp = require('metarhia-jstp');
const readline = require('readline');
const filer = require('./filer.js');

const downloadList = new Map();
let connection;
let username;

function eventCallback(interfaceName, eventName, ...args) {
  if (eventName === 'msg') {
    const msg = args[0];
    console.log(msg);
  } else if (eventName === 'file') {
    const file = args[0];
    filer.addFileToList(file, downloadList);
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
    filer.sendFiles(connection, filenames);
    rl.prompt();
  } else if (line.startsWith('download ')){
    const filenames = line.split(' ').slice(1);
    filer.downloadFiles(filenames, downloadList);
    rl.prompt();
  } else {
    const msg = [username, line];
    sendMsg(msg);
    rl.prompt();
  }
});
