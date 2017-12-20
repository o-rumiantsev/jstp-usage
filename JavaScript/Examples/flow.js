'use strict';

const metasync = require('metasync');
const fs = require('fs');
const readFile = (path) => (data, callback) => {
  fs.readFile(path, (err, data) => {
    console.log(path, err, data);
    callback(null);
  });
}

const path = ['./app.js', './api.js', './text.js', './server.js'];

const flow = metasync([readFile(path[0]), readFile(path[1])]);

flow({}, (err) => {
  if (err) console.error(err.message);
});
