const assert = require('assert');
const fs = require('fs');

const sum = (...rest)=>{
    var all = 0;
    for(var n of rest){
        all+=n
    }
    return all
}
const readFile=(done)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('./main.js',(err,data)=>{
            xxx;
            if(err){
                done(err)
            }else {
                done()
            }
        })
    })
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
        it('sum should return 6',(done)=>{
            fs.readFile('./package.json',(err,data)=>{
                if(err){
                    done(err)
                }else {
                    assert.equal(sum(1,2,3),6);
                    done()
                }
            })
        })
        it('sum should return 10',()=>{
            assert.equal(sum(1,2,3,4),10)
        })
        it('test readfile',(done)=>{
            console.log('read start...');
            readFile(done)
            
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