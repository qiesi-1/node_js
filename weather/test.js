const fs = require("fs");
const request = require("request")

//读取城市天气编码文件
readCityCode =function readCityCode(codebase,cityName,callback){
	fs.readFile(codebase,function(err,data){
		var obj = JSON.parse(data);
		console.log(obj[cityName]);
		callback(obj[cityName]);
	});
}
//发送编码获取天气信息
requestWeatherCom = function requestWeatherCom(cityCode,callback){
	weatherSRC = "http://www.weather.com.cn/data/cityinfo/"+cityCode+".html"
	request(weatherSRC,(err,data,callback)=>{
		if (err) throw err;
		console.log(data.body);
		SaveCUrrentWeather(data.body)
		callback;
	})
}

//存入当前查询的天气信息
SaveCUrrentWeather = function SaveCUrrentWeather(body){
	fs.writeFile("city.json",body,"utf-8",(err)=>{
			console.log("保存成功");
	});
}




//测试
module.exports =readCityCode;
module.exports =requestWeatherCom;
module.exports =SaveCUrrentWeather;
