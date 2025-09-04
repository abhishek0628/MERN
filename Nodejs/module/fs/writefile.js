const fs=require("fs");
fs.writeFile('test.txt','this is test file',(err)=>{
    if(err)throw err;
    console.log('file is written');
});