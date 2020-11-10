var fs =require("fs");

const path =require("path");

function MyReadFile(src){
	var content_text = fs.readFileSync(src, "utf-8");
}
