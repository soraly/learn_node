const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio')

const app = express();

app.get('/',(req,res)=>{
    axios.get('https://cnodejs.org/').then(data=>{
        var list = [];
        const $ = cheerio.load(data.data);
        $('.cell').each(function(index,item){
            var $item = $(item);
            list.push({
                href:'http://cnodejs.org' + $item.find('.topic_title').attr('href'), 
                title: $item.find('.topic_title').attr('title'),
                author: $item.find('.user_avatar img').attr('title'),
            });
        })
        res.send(list)   
    })
      
})
app.listen(3000,()=>console.log('listen on 3000'))


