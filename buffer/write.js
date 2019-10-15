const fs = require('fs')

var str = '';
for (var i = 0; i < 1024 * 10; i++) {
    str += 'a'
}
fs.writeFile('./a.txt', str, (err, data) => {
    console.log(err, data)
});