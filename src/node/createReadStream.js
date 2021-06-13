const fs = require('fs');
const rs = fs.createReadStream('./test.txt', {
  start: 11,
  end: 36
});

rs.on('open', fd => {
  console.log(`文件描述符${fd}已分配`);
});
rs.on('ready', () => {
  console.log('文件已准备');
});
rs.on('data', chunk => {
  console.log(`读取文件数据：${chunk.toString()}`);
})
rs.on('end', () => {
  console.log('文件已读取完毕');
})
rs.on('close', () => {
  console.log('文件已关闭');
})
rs.on('error', (err) => {
  console.log(err.stack)
})