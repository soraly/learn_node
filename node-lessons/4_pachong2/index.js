const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const https = require('https');
var iconv = require('iconv-lite')

const app = express();
var list = [];

axios.get('https://cnodejs.org/').then(data => {

    const $ = cheerio.load(data.data);
    $('.cell').each(function (index, item) {
        var $item = $(item);
        var href = 'https://cnodejs.org' + $item.find('.topic_title').attr('href');
        console.log(href, 'href');
        getComment(href, $item).then(function () {
            list.length === $('.cell').length && (console.log(list, 'list'));
        })
    })

    //res.send(list)   
})

function getComment(href, $item) {
    return new Promise((resolve) => {
        https.get(href, res => {
            var result = ''
            res.on('data', data => {
                result += data;
            })
            res.on('end', err => {
                var $2 = cheerio.load(result,{decodeEntities: false});
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


