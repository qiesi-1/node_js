var net = require('net');

var server = net.createServer(function(socket){
    var address = server.address();
    var message ="client,the server address is "+JSON.stringify(address);

    socket.write(message,function(){
        var writeSize = socket.bytesWritten;
        console.log(message + "has send");
        
    })
})