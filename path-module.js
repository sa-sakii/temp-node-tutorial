const path = require("path");

const filepath = path.join('/content/','sub','test.txt');
console.log(filepath);

const base = path.basename(filepath);
console.log(base);

// to get the absolute path
const absolute = path.resolve(__dirname,'content','sub','test.txt');
console.log(absolute);