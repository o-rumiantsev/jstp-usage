'use strict';

const fs = require('fs');
const metasync = require('metasync');

const MAX_BUFFER_LENGTH = 200000;

const imageExtensions = new Set([
  'png', 'jpg', 'jpeg', 'tif', 'bmp',
  'svg', 'gif', 'psd', 'tiff', 'pdf'
]);


//  Function, which parses buffer object to buffer
//
//  obj - object ot parse
//
function objToBuffer(obj) {
  const buf = new Uint16Array(obj);
  const buffer = Buffer.from(buf);
  return buffer;
}


//  Send file, which weights more than MAX_BUFFER_LENGTH,
//  by parts, which weights exactly MAX_BUFFER_LENGTH
//
//  connection - JSTP connection object to send by
//  filename - name of file to send
//  buf - appropriate file buffer
//
function sendByParts(connection, filename, buf) {
  const parts = [];
  let start = 0, end = MAX_BUFFER_LENGTH;

  console.log(buf.length);
  while (start <= buf.length) {
    const buffer = buf.slice(start, end);
    parts.push([filename, buffer]);
    start = end;
    end += MAX_BUFFER_LENGTH;
  }

  const callMethod = (file) => (data, callback) => connection.callMethod(
    'clientInterface', 'catchFile', file, (err) => {
      console.log('callMethod', file[0]);
      if (err) console.error(err.message);
      callback(null);
    }
  );

  const sequence = [];
  parts.forEach(part => sequence.push(callMethod(part)));

  const flow = metasync(sequence);
  flow({}, (err) => {
    if (err) console.error(err.message);
  });
}


//  Send file, which weights not more than MAX_BUFFER_LENGTH,
//
//  connection - JSTP connection object to send by
//  filenames - names of files to send
//
function sendFiles(connection, filenames) {
  filenames.forEach(filename => {
    fs.readFile('./' + filename, (err, buffer) => {
      if (err) console.error(err.message);
      else {
        if (buffer.length > MAX_BUFFER_LENGTH) sendByParts(
          connection, filename, buffer
        );
        else connection.callMethod(
          'clientInterface', 'catchFile', [filename, buffer], (err) => {
            if (err) console.error(err.message);
          }
        );
      }
    });
  });
}


//  Write files from appropriate collection to downloads/
//
//  names - names of files to write
//  map - collection of filenames and its data
//
function downloadFiles(names, map) {
  names.forEach(name => {
    if (map.has(name)) {
      const path = './downloads/' + name;
      const data = map.get(name);
      const buffer = objToBuffer(data);
      if (isImage(name)) {
        fs.writeFile(path, buffer, (err) => {
          if (err) console.error(err.message);
        });
      } else {
        fs.writeFile(path, buffer, 'utf8', (err) => {
          if (err) console.error(err.message);
        });
      }
    } else console.error('ERROR: No such file recieved');
  });
}


//  Function, which checks whether file is and image
//
//  filename - name of the file
//
function isImage(filename) {
  const index = filename.lastIndexOf('.');
  const ext = filename.substr(index + 1);
  if (imageExtensions.has(ext)) return true;
  else return false;
}



//  Add recieved file to appropriate collection
//
//  file - recieved file
//  map - collection to add to
//
function addFileToList(file, map) {
  const name = file[0];
  const data = file[1];
  const buffer = objToBuffer(data);
  console.log('length ' + buffer.length);
  console.log('file ' + name + ' recieved');
  if (map.has(name)) {
    const prevObj = map.get(name);
    const prevBuffer = objToBuffer(prevObj);
    const totalLength = buffer.length + prevBuffer.length;
    const bufferConcat = Buffer.concat([prevBuffer, buffer], totalLength);
    map.set(name, bufferConcat);
  } else map.set(name, data);
}

module.exports = {
  sendFiles,
  downloadFiles,
  addFileToList
}
