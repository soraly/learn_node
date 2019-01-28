//在server.js基础上，增加获取访问地址的请求参数功能,get or post
const http = require('http')
const url = require('url')
const util = require('util')
const fs = require('fs')
const path = require('path')

//创建服务器
http.createServer((req,res)=>{
    console.log(req.method,req.url,'请求信息')
    //获取文件路径，
    var pathname = url.parse(req.url).pathname.substring(1);
    var filepath = path.resolve(__dirname, pathname);

    //判断此路径是否属于可以读取的文件
    fs.stat(filepath,(err,stats)=>{
        if(err){
            res.setHeader('Content-Type','text/html; charset=UTF-8');
            res.write('路径有误:'+err) 
            res.end()
        }else if(stats.isDirectory()){
            //响应头的charset必须和返回数据的编码类型保持一致，否则会乱码，此处都用了utf16编码
            res.setHeader('Content-Type','text/plain; charset=UTF-16');
            res.write('这是目录','utf16le')
            res.end()
        }else {
            //获取请求方式
            if(req.method === 'GET'){
               console.log('get请求参数', url.parse(req.url, true).query)
            }else {
                var req_argu = '';
                req.on('data',chunk=>{
                    req_argu += chunk;
                })
                req.on('end', ()=>{
                    console.log('post请求参数是', req_argu);
                })
            }
            //读取文件内容并输出
            fs.readFile(filepath,(err, data)=>{
                if(err) console.log(err);
                //设置响应状态以及格式
                res.statusCode = 201;
                res.setHeader('Content-Type','text/html; charset=UTF-8');
                res.write(util.inspect(url.parse(req.url, true))) //测试用：util.inspect(url.parse(req.url))
                res.end()
            })
        }
        
    })
    
}).listen(6767,()=>{console.log('srever listen on 6767')})