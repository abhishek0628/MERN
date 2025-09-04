const fs=require('fs');
fs.appendFile('test.txt',' more text is appended',(err)=>{
    if(err)throw err;
    console.log('appended');
});