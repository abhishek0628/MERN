const http=require('http');
const server=http.createServer((req,res)=>{
    const data={name:'abhi',role:'student'};
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(data));
});
server.listen(3000,()=>{
    console.log("server running on localhost:3000");
});