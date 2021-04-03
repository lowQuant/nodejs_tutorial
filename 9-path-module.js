const path = require('path');

console.log(path.sep)

const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)


// very useful funtion to get dynamic paths - depended on where code is operating etc.
const absolute = path.resolve(__dirname,'content','subfolder','test.txt');

console.log(absolute)