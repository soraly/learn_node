var net = require('net');

var server = net.createServer(function (socket) {
    socket.on('data',data=>{
        console.log(data,'data')
    })
    socket.on('end',()=>{
        console.log('connect断了')
    })
    socket.write('welcome to here: \n')
})

server.listen(8124,()=>{
    console.log('server listen on 8124')
})