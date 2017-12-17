'use strict';

const fs = require('fs');

fs.readFile('./1.png', (err, data) => {
  const bitter = [];
  console.log(data.length);
  data.forEach(bit => bitter.push(bit));
  console.log(bitter.length);
});
