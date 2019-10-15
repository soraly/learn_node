const fs = require('fs')

var rs = fs.createReadStream('./note.txt',{highWaterMark: 11});
//在调用setEncoding()时，可读流对象在内部设置了一个decoder对象。每次data事件都通过decoder对象进行Buffer到字符串的解码，然后传递给调用者。
rs.setEncoding('utf-8');
var data = '';
rs.on('data',chunk=>data+=chunk);
rs.on('end',(res)=>{
    console.log(res,data,'done')
})