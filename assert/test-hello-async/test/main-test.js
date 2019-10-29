const assert = require('assert');
const fs = require('fs');

const sum = (...rest) => {
    var all = 0;
    for (var n of rest) {
        all += n
    }
    return all
}
const readFile = (done) => {
    return new Promise((resolve, reject) => {
        fs.readFile('./main.js', (err, data) => {
            xxx;
            if (err) {
                done(err)
            } else {
                done()
            }
        })
    })
}
//月均余额=last12money/12,if money=30000
var month = 12, base = 700, total = 0, money = 30000, arr = [];
for (var i = 1; i <= month; i++) {
    money -= base;
    arr.push(money);
}
arr.reduce(function(base,cur){
    base+=cur;
    return base
},0)/12;

function add(base,series,expect){
    var i = 0;
    while(base<expect){
        i++;
        base+=series
    }
    return i;
}
describe('#main.js', () => {
    before(() => {
        console.log('before...');
    })
    after(() => {
        console.log('after...');
    })
    beforeEach(() => {
        console.log('each...');
    })
    describe('sum-test', () => {
        it('sum should return 6', (done) => {
            fs.readFile('./package.json', (err, data) => {
                if (err) {
                    done(err);
                } else {
                    assert.equal(sum(1, 2, 3), 6);
                    done()
                }
            })
        })
        it('sum should return 10', () => {
            assert.equal(sum(1, 2, 3, 4), 10)
        })
        it('test readfile', (done) => {
            console.log('read start...');
            readFile(done)

        })
        it('sum should return 15', () => {
            try {
                assert.equal(sum(1, 2, 3, 4, 15), 15)
            } catch (err) {
                //console.log(err,'err')
            }

        })
    })
})