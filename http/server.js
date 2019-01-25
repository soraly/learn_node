const http = require('http')
const url = require('url')
const util = require('util')
const fs = require('fs')
const path = require('path')

//创建服务器
http.createServer((req,res)=>{
    //获取文件路径
    var pathname = url.parse(req.url).pathname.substring(1);
    
    //读取文件内容并输出
    fs.readFile(path.resolve(__dirname, pathname),(err, data)=>{
        if(err) console.log(err);
        //设置响应状态以及格式
        res.statusCode = 201;
        res.setHeader('Content-Type','text/html');
        res.write(buf1) //测试用：util.inspect(url.parse(req.url))
        res.end()
    })
    
}).listen(6767,()=>{console.log('srever listen on 6767')})