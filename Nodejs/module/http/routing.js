const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/' && req.method==='GET')
    {
        res.end('home page');
        
    }
    else if(req.url==='/about')
    {
        res.end('About Page');
    }
    else{
        res.statusCode=404;
        res.end('page not found');
    }
});
server.listen(3000,()=>{
    console.log("server running on localhost:3000");
});