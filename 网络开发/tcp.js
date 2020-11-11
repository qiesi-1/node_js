const { count } = require('console');
const { Socket } = require('dgram');
const net = require('net');

var myServer = net.createServer();


//端口事件驱动
myServer.listen(8081);
myServer.on('listening',() => {
    console.log("服务器请求成功");
    var address = myServer.address();
    console.log("端口号:"+address.port);//端口号
    console.log("ip格式:"+address.family);//ip格式
    console.log("监听地址:"+address.address);//监听地址
});

//连接事件驱动 , 非阻塞式io模型
myServer.on('connection',(socket)=>{
    console.log("tcp连接成功");
    myServer.getConnections((err,count) => {
        myServer.maxConnections = 3;
        console.log("当前连接数为:"+count);
    });
    //获取客户端发送的数据
    socket.on('data',(data) => {
        console.log(data.toString());
    });

    socket.write("欢迎来到憨憨服务器的在线聊天服务器",function(){
        console.log("发送成功！")
    })
});

//关闭事件驱动
myServer.on('close',() =>{
    console.log("服务器关闭成功");
});

//错误事件驱动
myServer.on('error',() =>{
    console.log("出现错误");
});