'C:\\Users\\Asus-\\Desktop\\xiaolong.txt'//加载第三方包与我们写好的配置文件，解析函数文件
var config = require('./config.js');
var analyze = require('./analyze.js');
var request = require('request');
var path = require('path');
var fs = require("fs")


//对图片网址发起请求
function start(){
    //发起get请求
   request(config.url,function (err,res,body){
       console.log("start");
       // 如果err 为 FALSE时 表示没有错误，res为TRUE时表示有响应信息
       if (!err && res){
           console.log('start');
          analyze.findImg(body,downLoad);
       }

   })
}

//解析好的图片地址，下载并保存到制定目录
function downLoad(imgUrl , i){
    //从点处开始截取，保留后面的字符串，用于获取后缀
    let ext = imgUrl.split(".").pop();
    //开始保存
    request(imgUrl).pipe(fs.createWriteStream(path.join(config.imgDir,i+'.'+ext), {
        'encoding' : 'utf8'
    }))
    console.log(i);
    
}

start()
