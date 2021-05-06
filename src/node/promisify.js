const fs = require('fs');
const path = require('path');
const util = require('util');

const readFile = util.promisify(fs.readFile);

readFile(path.join(__dirname, './moduleA.js')).then(res => {
  console.log(res.toString());
}).catch(err => {
  console.log(err);
})