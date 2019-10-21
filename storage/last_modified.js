const http = require('http');
const fs = require('fs');

const handler = (req,res)=>{
    var href = './hello.txt';
    if(req.url === '/'){
        fs.stat(href,(err,filedata)=>{
        console.log(req.headers['if-modified-since'],filedata.mtime.toUTCString())
        if(req.headers['if-modified-since'] === filedata.mtime.toUTCString()){
            res.writeHead(304,{'content-type':'text/html'});
            console.log('read from cache');
            res.end();
        }else {
            fs.readFile(href,(err,data)=>{
                res.writeHead(200,{'Content-Type':'text/html','Last-Modified': filedata.mtime.toUTCString()});
                res.write(data);
                console.log('read from net');
                res.end('hellooo');
            })
        }
    })
    }
}
var server = http.createServer(handler);

server.listen(8898,res=>{console.log('listen on 8898')});