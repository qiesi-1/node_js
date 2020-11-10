const path = require('path');

path1 = path.normalize('C:\Users\Asus-\Desktop\1');

path2 = path.join('C:','Users','Asus-','Desktop','1');

path3 = path.relative('C:\\Users\\Asus-\\Desktop\\xiaolong.txt', 'C:\\Users\\Asus-\\Desktop');

console.log(path1,path2,path3);