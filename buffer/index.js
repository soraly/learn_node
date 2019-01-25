/*Node.js 支持的字符编码有：

'ascii' - 仅支持 7 位 ASCII 数据。

'utf8' - 多字节编码的 Unicode 字符。

'utf16le' - 2 或 4 个字节，小端序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。

'ucs2' - 'utf16le' 的别名。

'base64' - Base64 编码。

'latin1' - 将 Buffer 编码成单字节编码的字符串。

'binary' - 'latin1' 的别名。

'hex' - 将每个字节编码成两个十六进制字符。*/

//编码
var buf1 = Buffer.from('hello') //默认为utf8
console.log(buf1) //==> <Buffer 68 65 6c 6c 6f>

var buf2 = Buffer.from('hello','utf8') 
console.log(buf2) //==> <Buffer 68 65 6c 6c 6f>

var buf3 = Buffer.from('hello','utf16le')
console.log(buf3) //==> <Buffer 68 00 65 00 6c 00 6c 00 6f 00>

var myname1 = Buffer.from('翔','utf8') 
console.log(myname1) //==><Buffer e7 bf 94> utf8用一个或两个或三个字节表示中文

var myname2 = Buffer.from('翔','ucs2') 
console.log(myname2) //==><Buffer d4 7f> utf16用2个字节表示中文

//解码
var buf3 = Buffer.from('hello','utf16le')
console.log(buf3.toString()) //==> hello
console.log(buf3.toString('hex')) //==> 680065006c006c006f00
console.log(buf3.toString('base64')) //==> aABlAGwAbABvAA==


var myname2 = Buffer.from('翔','ucs2') 
console.log(myname2.toString()) //==> 乱码！因为toString默认用utf8解码，所以遇到utf16编码的字符串就会乱码了
console.log(myname2.toString('ucs2')) //==> 翔
