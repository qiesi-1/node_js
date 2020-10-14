const fs = require('fs');

const oldPath = "C:\\Users\\Asus-\\Desktop\\xiaolong.txt";

const newPath = "C:\\Users\\Asus-\\Desktop\\xiaohua.js";

fs.rename(oldPath, newPath, (err) => {
  if (err) throw err;
 fs.stat(newPath, (err,stats) =>{
  if (err) throw err;
  consle.log(`stats:${JSON.stringify(stats)}`);
 });
});