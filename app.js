var http = require('http');
var fs = require('fs');
var user={
    "name":"ismael",
    "job":"programming",
    "age":50
}
http.createServer((req,res)=>{
    res.writeHead(200,({'Content-Type':'application/json'}));
    //var myStream = fs.createReadStream(__dirname+"/"+'index.html','utf8');
    res.end(JSON.stringify(user));

}).listen(8081,'127.0.0.1');