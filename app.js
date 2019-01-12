//var buf = new Buffer(10);
//var buf = new Buffer([10,20,30]]);
//var buf = new Buffer("airx-ihm",'utf8');
var buf = new Buffer(26);
//console.log(buf.toString());
// len = buf.write("airx");
// console.log(buf.toString());
for(var i=0;i<26;i++){
    buf[i]=i+97;
}
console.log(buf.toString('ascii'));