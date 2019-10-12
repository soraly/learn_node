//当在浏览器中访问 http://localhost:3000/?q=alsotang 时，输出 alsotang 的 md5 值，即 bdd5e57b5c0040f9dc23d430846e68a3
const md5 = require('md5');
const sha1 = require('sha1');
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    var value = req.query.q;
    res.send(sha1(value));
})
app.listen(3000,res=>console.log('listen on 3000'));

//console.log(md5('hello'))