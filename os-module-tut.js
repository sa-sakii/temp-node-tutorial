const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

console.log(`the system uptime is ${os.uptime()} seconds`)