//断言就像是一个if语句,如果结果和你的预期一样,那么OK,结果为真继续运行.如果结果和预期不符,
//那么程序会抛出一个系统级错误(不是异常),并且终止程序运行
const assert = require('assert');

console.log(123);
try{
	assert.strictEqual(1,1);
}catch(err){
	console.log(err)
}
console.log(231)


