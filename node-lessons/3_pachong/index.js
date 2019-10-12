const express = require('express');
const axios = require('axios');

const app = express();

app.get('/',(req,res)=>{
    res.send('hello')     
})
axios.get('https://cnodejs.org/').then(data=>{
        var reg = /<a class='topic_title' href='(.*?)' title='(.*?)'>.*\n*.*?\n*.*<\/a>/g;    
        var result = reg.exec(data.data),list=[];
        while(result){
            list.push({
                href:'http://cnodejs.org'+result[1], 
                title:result[2],
            });
            result = reg.exec(data.data);
        }
        console.log( list)
    })
//app.listen(3000,()=>console.log('listen on 3000'))


