const assert = require('assert')
const app = require('../app')
const request = require('supertest')

var server = app.listen(3001, () => console.log('listen on 3001'))



describe('#app.js', () => {
    describe('test1', () => {
        if('test a + b',()=>{
            
        })
        it('test 1 + 1', () => {
            assert.equal(1, 1);
        })
        it('test 2 + 2', () => {
            assert.equal(2, 2);
        })
        it('test timeout',(done)=>{
            setTimeout(function(){done()},3000)
        })
    })

    // describe('test Http',  () => {
    //     it('test GET /',async ()=>{
    //         console.log('start..')
    //         let res = request(server).get('/?name=xiang');
    //         res.expect('Content-Type', /text\/html/)
    //         .expect(200, '<h1>Hello, xiang!</h1>');
    //         console.log('end..');
    //     })
       
    // })
})