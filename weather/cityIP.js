const request = require('request');
const crcc = require('./test.js');
var url = "http://ip.taobao.com/outGetIpInfo?ip=myip&accessKey=alibaba-inc";


request(url,(err,data) =>{
    var cityNameOBJ = JSON.parse(data.body);
    var cityName = cityNameOBJ.data.city;
    var codebase = "./city_china.json";
    readCityCode(codebase,cityName,requestWeatherCom);
});