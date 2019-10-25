const assert = require('assert');

const sum = (...rest)=>{
    var all = 0;
    for(var n of rest){
        all+=n
    }
    return all
}
console.log('start...')
assert.equal(sum(1,2,3),6);
assert.equal(sum(1,2,3,4),10);
assert.equal(sum(1,2,3,4),11);
console.log('continue...')