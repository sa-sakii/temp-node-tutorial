const fs = require("fs");

// read file sync
const first = fs.readFileSync("./content/first.txt", "utf-8");
const second = fs.readFileSync("./content/second.txt", "utf-8");

console.log(first);
console.log(second);

// write file sync

fs.writeFileSync(
  "./content/third.txt",
  "hello this is the third text file written using writeFileSync()"
);
