const {readFile} = require('fs').promises;

const start = async() => {
    try{
        const first = await readFile('./content/first.txt','utf-8');
        const second = await readFile('./content/second.txt','utf-8');
        console.log(first,second);
        console.log('reading done');

    }
    catch (error){
        console.log(error);
    }
}

start();
