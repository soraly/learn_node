const fs = require('fs')

var rs = fs.createReadStream('./note.txt',{highWaterMark: 11});

var data = [];
rs.on('data',chunk=>data.push(chunk));
rs.on('end',(res)=>{
    var buf = Buffer.concat(data);
    console.log(buf.toString(),'done');
})