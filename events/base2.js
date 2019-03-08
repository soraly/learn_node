var EventEmitter = require('events')

var myevent = new EventEmitter()

var listener1 = function(...args){
    /*EventEmitter 会按照监听器注册的顺序同步地调用所有监听器。所以必须确保事件的排序正确，且避免竞态条件。 
    可以使用 setImmediate() 或 process.nextTick() 切换到异步模式：*/

    //setImmediate:
    // setImmediate(()=>{
    //     for(var i = 100000;i>0;i--){
    //         for(var j = 0;j<10000;j++){

    //         }
    // }
    // console.log(args,'我被触发了111')
    // })
    
    //nextTick:
    process.nextTick(()=>{
         for(var i = 100000;i>0;i--){
            for(var j = 0;j<10000;j++){

            }
    }
    console.log(args,'我被触发了111');
    })
}

var listener2 = function(...args){
    console.log(args,'我被触发了222');
}

myevent.on('click',listener1);
myevent.on('click',listener2);

//myevent.removeListener('click',listener1) //移除监听事件要写在on和emit两者之间，否则不生效

myevent.emit('click')