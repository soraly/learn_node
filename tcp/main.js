const net = require('net');
const server = net.createServer((socket) => {
  // 'connection' 监听器。
  console.log('客户端已连接');
  socket.on('end', () => {
    console.log('客户端已断开连接');
  });
  socket.write('hello\r\n');
  socket.pipe(socket);  //TCP套接字（socket）是一个可读可写的stram对象
  socket.pipe(socket);
  socket.on('data',data=>{
    console.log(data,'dataaaaaa')
  })
});
server.on('error', (err) => {
  throw err;
});
server.listen(8124, () => {
  console.log('服务器已启动');
});