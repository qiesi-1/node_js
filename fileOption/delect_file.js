const fs = require('fs');

//同步操作读取文件,并删除
for (var i=3;i<=10;i++){
	fs.unlinkSync("C:\\Users\\Asus-\\Desktop\\"+i+".txt");
	console.log('successfully deleted file')
}
