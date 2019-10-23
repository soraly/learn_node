const http = require('http');
const fs = require('fs');

const handler = (req,res)=>{
    var href = './hello.txt';
    if(req.url === '/'){
        fs.readFile(href,(err,data)=>{
            res.setHeader('Cache-Control','max-age='+10*24*3600*1000)
            res.writeHead(200,"okl");
            res.write(data);
            res.end('hellooo');
        })
    }
}
var server = http.createServer(handler);

server.listen(8898,res=>{console.log('listen on 8898')});