//同步方法删除文件
const fs = require('fs');

//同步操作读取文件
fs.unlinkSync("C:\\Users\\Asus-\\Desktop\\xiaolong.txt");
console.log('successfully deleted file')