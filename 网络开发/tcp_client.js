var net = require('net')

var client = new net.Socket();

client.connect(18001,"192.168.1.2",function(){
    console.log("客户端连接服务器成功，等待连接。。。")
    /**1.可以接收服务器发送的数据 */

    client.write("")

})

client.on('data',function(data){
    console.log('客户端接收数据为'+data.toString());
})