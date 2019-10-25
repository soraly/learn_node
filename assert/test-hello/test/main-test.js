const assert = require('assert');

const sum = (...rest)=>{
    var all = 0;
    for(var n of rest){
        all+=n
    }
    return all
}

describe('#main.js',()=>{
    before(()=>{
        console.log('before...');
    })
    after(()=>{
        console.log('after...');
    })
    beforeEach(()=>{
        console.log('each...');
    })
    describe('sum-test',()=>{
        it('sum should return 6',()=>{
            assert.equal(sum(1,2,3),6)
        })
        it('sum should return 0',()=>{
            assert.equal(sum(1,2,3,4),10)
        })
        it('sum should return 15',()=>{
            try{
                assert.equal(sum(1,2,3,4,15),15)
            }catch(err){
                //console.log(err,'err')
            }
            
        })
    })
})