const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio')

const app = express();

app.get('/',(req,res)=>{
    axios.get('http://hz.hshb.com/ershoufang/v4087/').then(data=>{
        //console.log(data.data)
        var list = [];
        const $ = cheerio.load(data.data);
        $('.Tmp-Info').each(function(index,item){
            var $item = $(item);
            list.push({
                name:'金地自在城', 
                value: $item.find('.fc-gray').html(),
            });
        })
        console.log(list)
        res.send(list)   
    })
      
})



app.listen(3000,()=>console.log('listen on 3000'))


