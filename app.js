var fs = require('fs');
var data='airx test writer in nodejs';
var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data,'utf8');
writerStream.end();
writerStream.on('finish',()=>{
    console.log("end");
});