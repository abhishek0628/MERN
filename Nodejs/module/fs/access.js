const fs=require('fs');
fs.access('text.txt',fs.constants.F_OK,(err)=>{
    console.log(err?"file does not exits":"file exites");
});