//同步方法删除文件
const fs = require('fs');

//同步操作读取文件
fs.unlinkSync("C:\\Users\\Asus-\\Desktop\\周林华.txt");
console.log('successfully deleted file')