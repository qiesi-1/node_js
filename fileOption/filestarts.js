const fs = require('fs')

fs.stat('C:\\Users\\Asus-\\Desktop\\xiaolong.txt',function(err,stats){
	if(err) throw err
	console.log(stats.isFile());
	console.log(stats.isDirectory());

}); 