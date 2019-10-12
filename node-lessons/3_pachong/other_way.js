const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio')

const app = express();

app.get('/',(req,res)=>{
    res.send('hello')     
})
axios.get('https://cnodejs.org/').then(data=>{
        var list = [];
        const $ = cheerio.load(data.data);
        $('.topic_title').each(function(index,item){
            var $item = $(item);
            list.push({
                href:'http://cnodejs.org' + $item.attr('href'), 
                title: $item.attr('title'),
            });
        })
        console.log(list);
    })
//app.listen(3000,()=>console.log('listen on 3000'))


