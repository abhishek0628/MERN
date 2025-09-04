const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('hello from node.js');
});
server.listen(3000,()=>{
    console.log("running on localhost:3000");
});