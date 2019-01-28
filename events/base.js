var EventEmitter = require('events');

const myevent = new EventEmitter()  

//第二种写法：
// var EventEmitter = require('events');
// class MyEvent extends EventEmitter {}
// const myevent = new MyEvent()

myevent.on('test',function(a,b){
    console.log('emitted...',a,b)
    console.log(this)
})
myevent.on('click', (...args)=>{
    console.log(args,this,'clicked')
})

myevent.emit('test','hello','xiang')
myevent.emit('click','xiang','fenfen')