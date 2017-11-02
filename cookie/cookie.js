var http = require('http')
var express = require('express')
const cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session')

var app = express();



app.use(cookieSession({
    name: 'lzxsession',
    keys: ['aaa', 'bbb', 'ccc'],
    maxAge: 24*3600*1000
}))
app.use(cookieSession({
    name: 'lzxsession2',
    keys: ['aaa', 'bbb', 'ccc'],
    maxAge: 48*3600*1000
}))


app.use(cookieParser('fjlsfjlsfjal'))

app.use('/aaa/bbb', (req, res) => {
    res.cookie('name', 'xiang', { httpOnly: true, path: '/aaa', signed: true })
    res.cookie('age', '20', { httpOnly: true, signed: true })
    // res.clearCookie('name');
    if(req.session['count']){
        req.session['count'] ++ 
    }else {
        req.session['count'] = 100;
        req.session.age = 200;
        req.session.username = '刘志翔'
    }
    console.log(req.session)
    res.send('<h2>ok!!</h2>');
})

app.listen(7899, (res) => {
    console.log('server listen on 7899')
})