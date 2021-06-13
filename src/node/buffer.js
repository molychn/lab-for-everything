// const buf1 = Buffer.from('test', 'utf-8');
// console.log('buf1: ', buf1);
// const buf2 = Buffer.from(buf1);
// console.log('buf2: ', buf2);
// let a = [255, 250, 0, 3]
// const buf3 = Buffer.from(a);
// console.log('buf3: ', buf3);
// a[4] = 255;
// console.log('buf3: ', buf3);
// const buf4 = Buffer.from(a);
// console.log('buf4: ', buf4);
// const arr = new Uint16Array(2);
// arr[0] = 5000;
// arr[1] = 3000;
// const buf5 = Buffer.from(arr.buffer);
// console.log('buf5: ', buf5);
// arr[1] = 6000;
// console.log('arr.buffer: ', arr.buffer);
// console.log('buf5: ', buf5);
// const buf6 = Buffer.from(arr.buffer);
// console.log('buf6: ', buf6);
// const obj = {
//   0: 255,
//   1: 1,
//   length: 2
// }
// console.log(obj.valueOf());
// const buf7 = Buffer.from(obj);
// console.log('buf7: ', buf7);

const buf = Buffer.from('中文字符串');

for (let i = 0; i < buf.length; i += 5) {
  var b = Buffer.allocUnsafe(5);
  buf.copy(b, 0, i);
  console.log(b.toString());
}

const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');
for (let i = 0; i < buf.length; i += 5) {
  var b = Buffer.allocUnsafe(5);
  buf.copy(b, 0, i);
  console.log(decoder.write(b));
}