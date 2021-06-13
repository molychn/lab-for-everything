const fs = require('fs');
const path = require('path');
const promisify = require('util').promisify;

const open = promisify(fs.open);
const read = promisify(fs.read);
const close = promisify(fs.close);

async function fn () {
  const fd = await open(path.join(__dirname, './test.txt'), 'r');
  console.log(fd);
  let buffer = Buffer.alloc(255)
  const result = await read(fd, buffer, 0, 26, null);
  console.log(result);
  await close(fd);
}
fn();


// fs.open(path.join(__dirname, './moduleA.js'), 'r', (err, fd) => {
//   console.log(fd);
//   fs.read(fd, (er, data) => {
//     console.log(data);
//     fs.close();
//   });
// })
