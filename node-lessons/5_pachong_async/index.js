const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const https = require('https');
var async = require('async')

const app = express();
var list = [];

axios.get('https://cnodejs.org/').then(data => {

    const $ = cheerio.load(data.data);
    $('.cell').each(function (index, item) {
        var $item = $(item);
        var href = 'https://cnodejs.org' + $item.find('.topic_title').attr('href');
        list.push({
            href: 'http://cnodejs.org' + $item.find('.topic_title').attr('href'),
            title: $item.find('.topic_title').attr('title'),
            author: $item.find('.user_avatar img').attr('title')
        });
    })
    var urls = list.map(item=>item.href);
    async.mapLimit(urls,10,async function(url){
        console.log(url,'url');
        fetchData(url);
    })
    //console.log(urls)
    //res.send(list)   
})

function fetchData(url){
    axios.get(url).then(data=>{
        var html = cheerio.load(data.data, {decodeEntities: false});
        console.log(html('.reply_content div p').eq(0).html());
        resolve()
    })
    
}

function getComment(href, $item) {
    return new Promise((resolve) => {
        https.get(href, res => {
            var result = ''
            res.on('data', data => {
                result += data;
            })
            res.on('end', err => {
                var $2 = cheerio.load(result);
                var ee = $2('.reply_content div p').eq(0).html();
                ee = ee && ee.replace(/\\/g, "%");  
                list.push({
                    href: 'http://cnodejs.org' + $item.find('.topic_title').attr('href'),
                    title: $item.find('.topic_title').attr('title'),
                    author: $item.find('.user_avatar img').attr('title'),
                    comment: unescape(ee)
                });
                resolve('ok');
            })
        })
    })
}

// app.get('/',(req,res)=>{

// })
// app.listen(3000,()=>console.log('listen on 3000'))


