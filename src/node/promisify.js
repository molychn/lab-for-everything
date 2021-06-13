const fs = require('fs');
const path = require('path');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const readFileFn = () => {
  return readFile(path.join(__dirname, './moduleA.js')).then(res => {
    console.log(res.toString());
  }).catch(err => {
    console.log(err);
  })
}

async function foo () {
  console.log(1);
  await readFileFn();
  console.log(2);
}
foo();