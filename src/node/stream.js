const fs = require('fs');
const stream = require('stream')
const ws = fs.createWriteStream('./streamWrite.txt');
const Readable = stream.Readable;
const Writable = stream.Writable;
class RandomNumberStream extends Readable {
  constructor (max) {
    super();
    this.max = max;
  }
  _read () {
    const ctx = this;
    setTimeout(() => {
      if (ctx.max) {
        const randomNumber = parseInt(Math.random() * 10000000000000000);
        // only push type string or buffer
        ctx.push(`${randomNumber}\n`);
        ctx.max -= 1;
      } else {
        ctx.push(null);
      }
    }, 100);
  }
}
class OutputStream extends Writable {
  _write (chunk, enc, done) {
    process.stdout.write(chunk.toString());
    setTimeout(done, 1000);
  }
}

const rns = new RandomNumberStream(5);
const os = new OutputStream({
  highWaterMark: 1
});
rns.on('data', chunk => {
  if (os.write(chunk) === false) {
    console.log('pause');
    rns.pause();
  }
});
os.on('drain', () => {
  console.log('drain');
  rns.resume();
})
// rns.on('data', chunk => {
//   console.log(chunk);
// })
// rns.pipe(process.stdout);
// rns.on('readable', () => {
//   let chunk;
//   while ((chunk = rns.read()) !== null) {
//     console.log(chunk);
//   }
// });