const fs = require('fs');
const path = require('path');

// function myReadFile(src){
// 	var content_text = fs.readFileSync(src, "utf-8");
// }


function myCopy(src,dst){
	fs.writeFileSync(dst, fs.readFileSync(src, "utf-8"), "utf-8");
}

var dst = "C:\\Users\\Asus-\\Desktop"
var src = "C:\\Users\\Asus-\\Desktop"
var fileName1 = "1.txt";
var fielName2 = "2.txt";

myCopy(path.join(src,fileName1),path.join(dst,fielName2));

for (var i = 3; i <= 10; i++) {
	myCopy(path.join(src,fileName1),path.join(dst,i+".txt"));

}