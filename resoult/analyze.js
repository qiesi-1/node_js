//加载cheerio 模块
const cheerio = require('cheerio');
//DOM解析函数，得到图片地址
function findImg(dom,callback){
    //cheerio 语法 选择器
    let $ = cheerio.load(dom);
    //jquery语法 选择器
    $('li>a>img').each(function (i,elem){
        //拿到当前标签的src属性
        // var ip = "http://www.pichz.com/"
        let imgSrc = $(this).attr('src');

        //回调函数callback，用于保存图片
        //i为自增序列号，for循环自加一
        console.log(imgSrc)
        callback(imgSrc,i);
    });
}

//导出图片地址解析函数
module.exports.findImg = findImg;