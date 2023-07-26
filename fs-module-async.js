const fs = require("fs");

fs.readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("ERROR: file not found");
    return;
  }
  console.log(result);
});

file_four_content = 'this is the fourth file written using async method';
fs.writeFile('./content/fourth.txt',file_four_content, (err, result)=>{
    if (err){
        console.log(err);
        return; 
    }
    console.log("file four saved");
})