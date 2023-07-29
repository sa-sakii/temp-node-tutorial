// streams is a method in fs module which reads/writes data in chunks
const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt',{highWaterMark : 90000, encoding : 'utf-8'});
// default chunk size is 64kb 
// last buffer - remainder 
// highWaterMark - control size 
// encoding - utf-8

stream.on('data', (result)=>{
    console.log(result);
});

stream.on('error', (err) => {console.log(err);});

