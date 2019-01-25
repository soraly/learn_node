var http = require('http');
var util = require('util')

//buffer类型的数据和字符串相加时，会被转换成字符串
var buf1 = Buffer.from('刘')
var buf2 = Buffer.from('志翔')
var buf3 = buf1 + ','+buf2
console.log(buf3) //==> helloworld

var url = 'http://m.igrow.cn/api/1.1b/school/semester/valid/get'
http.get(url, res=>{
    const {statusCode} = res; 
    console.log(statusCode)
    var data = Buffer.from('hi');
    res.on('data', chunk=>{
        data += chunk;
    })
    res.on('end',()=>{
        console.log(typeof data)
    })
})