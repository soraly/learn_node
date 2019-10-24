const http = require('http');
const fs = require('fs');
const mime = require('mime');
const path = require('path');

http.createServer((req, res) => {
    var href = './hello.txt';
    if(req.url === '/'){
        res.writeHead(200,'ok',{'Content-Type':'text/html'});
        res.end('<h2>down sth<h2><br><a style="text-decoration: underline" href="/download">click me to download</a>')
    }else if(req.url === '/download'){
        fs.stat(href, (err, stat) => {
            var rs = fs.createReadStream(href);
            res.setHeader('Content-Disposition', 'attachment; filename=' + path.basename(href));
            res.setHeader('Content-Type', mime.getType(href));
            res.setHeader('Content-Length', stat.size);
            res.writeHead(200,'ok!');
            rs.pipe(res); //或者res.end(Buffer.from('hello'))
        })
    }
}).listen(8989, () => { console.log('listen on 8989') })