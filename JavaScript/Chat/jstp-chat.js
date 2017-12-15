'use strict';

const fs = require('fs');
const jstp = require('metarhia-jstp');
const readline = require('readline');

let connection;
let username;
const downloadList = new Map();

const imageExtensions = new Set([
  'png', 'jpg', 'jpeg', 'tif', 'bmp',
  'svg', 'gif', 'psd', 'tiff', 'pdf'
]);

function eventCallback(interfaceName, eventName, ...args) {
  if (eventName === 'msg') {
    const msg = args[0];
    console.log(msg);
  } else if (eventName === 'file') {
    const file = args[0];
    const name = file[0];
    const data = file[1];
    console.log('file ' + name + ' recieved');
    downloadList.set(name, data);
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
    const data = fs.readFileSync('./' + filename, 'utf8');
    connection.callMethod(
      'clientInterface', 'catchFile', [filename, data], (err) => {
        if (err) console.error(err.message);
      }
    );
  });
}

function downloadFiles(names) {
  names.forEach(name => {
    if (downloadList.has(name)) {
      const path = './downloads/' + name;
      const data = downloadList.get(name);
      if (isImage(name)) {
        fs.writeFile(path, data, null,(err) => {
          if (err) console.error(err.message);
        });
      } else {
        fs.writeFile(path, data, (err) => {
          if (err) console.error(err.message);
        });
      }
    }
  });
}

function isImage(filename) {
  const index = filename.lastIndexOf('.');
  const ext = filename.substr(index + 1);
  if (imageExtensions.has(ext)) return true;
  else return false;
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
  } else if (line.startsWith('download ')){
    const filenames = line.split(' ').slice(1);
    downloadFiles(filenames);
    rl.prompt();
  } else {
    const msg = [username, line];
    sendMsg(msg);
    rl.prompt();
  }
});
