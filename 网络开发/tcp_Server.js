const net = require('net');

var myServer = net.createServer();

//端口事件驱动
myServer.listen(8001);
myServer.on('listening',() =>{
    console.log('服务器启动成功')
    var address = myServer.address();
    console.log("端口号"+address.port);
    console.log("IP格式"+address.family);
    console.log("监听地址"+address.address);
});

//连接事件驱动
myServer.on('connection',(socket)=>{ 
    console.log('服务器连接成功');
    myServer.getConnections((err,count)=>{
        myServer.maxConnections = 3;
        console.log("当前连接数为"+count);
    });
    //获取客户端发送的数据
    socket.on('data',(data)=>{
        console.log(data);
    })
});


//关闭事件驱动
myServer.on("close",()=>{
    console.log('服务器关闭成功')
});


//err事件驱动
myServer.on('error',()=>{
    console.log('服务器错误');
})

//设置监听端口
myServer.listen(8001,() =>{
    console.log('服务器启动成功')
})
