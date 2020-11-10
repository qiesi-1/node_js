const http = require("http");
const fs = require("fs");
const url = require("url");
const crcc = require("./test.js");
const cpst = require('./cityIP.js')


http.createServer(function(req,resp){
		//第一次通过IP地址获取用户城市，第n次获取可以通过前端传递
	var urlObj = url.parse(req.url,true);
	console.log(urlObj)
	resp.writeHead(200,{"content-type":"text/html;charset=utf-8"});//设置主页的url
	if (req.url == "/weather"){
		fs.readFile("html/index.html",(err,data)=>{
			resp.end(data)
		});

	}else if (req.url == "/html/yun.gif"){
		fs.readFile("html/yun.gif",(err,data)=>{
			resp.end(data);
		});

	}else if (req.url == "/city.json"){
		console.log("==JSON==success")
		fs.readFile("city.json",(err,data)=>{
			console.log(data);
			resp.end(data);
		});
		//解析URL
	}else if (urlObj.pathname == "/weather/select"){
		var codebase = "./city_china.json";
		readCityCode(codebase,urlObj.query.cityName,requestWeatherCom);
		setTimeout(function(){
			resp.end("successful")
		},500);
	}else{
		resp.end("404!")
	}
	
	}).listen(3000,function(err){console.log("服务器请求成功");});



