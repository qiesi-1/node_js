const net = require('net');

var myServer = net.createServer((socket)=>{
    console.log("someone connects")
})

myServer.listen(18001,()=>{
    console.log("服务器启动成功");
});
