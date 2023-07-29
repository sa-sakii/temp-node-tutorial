// event loop example 
// asynchronus methods get offloaded

const { readFile } = require('fs');

console.log('started the first task');

readFile('./content/first.txt','utf-8',(err, result)=>{
    if (err){
        console.log(err);
        return;
    }
    console.log(result);
    console.log('completed the first task'); // executed after immediate tasks
})
console.log('starting the next task'); // after this the func is executed 
