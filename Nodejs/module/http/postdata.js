const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.method==='POST')
    {
        let body='';
        req.on('data',chunk=>{
            body+=chunk.toString();
        });
        req.on('end',()=>{
            console.log("received",body);
            res.end('post data received');
        });
    }
    else{
        res.end('send a post request');
    }
});
server.listen(3000,()=>{
    console.log("server running on localhost:3000");
});