// os and path


// const os = require('os');
//OR
// const {totalmem, freemem} = require('os');


// console.log(os);
// console.log(os.userInfo());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(totalmem());
// console.log(freemem());



// console.log(__dirname);
// console.log(__filename);

const path = require('path');
// console.log(path);

// const extensionName = path.extname('index.html');
// console.log(extensionName);

const joinName = path.join(__dirname + '/student');
const joinName2 = path.join(__dirname + '/../student');
console.log(joinName);
console.log(joinName2);