//异步删除文件
const fs = require('fs')
//异步操作读取文件
fs.unlink('C:\\Users\\Asus-\\Desktop\\xiaolong.txt',(err)=>{
	if (err) throw err;
	console.log('successfully deleted file')
});
