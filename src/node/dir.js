const fs = require('fs/promises');
// const promisify = require('util').promisify;

// const opendir = promisify(fs.opendir);

async function print (path) {
  // const dir = await fs.opendir(path);
  // for await (const dirent of dir) {
  //   console.log(dirent.name);
  // }
  const files = await fs.readdir(path);
  for await (const file of files) {
    console.log(file);
  }
}
// print('./').catch(console.log);

// fs.mkdir('./dirs/test', console.log);
fs.rmdir('./dirs/test', {recursive: true}, err => console.log);