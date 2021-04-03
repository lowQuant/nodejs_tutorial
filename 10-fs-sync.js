// this is a destructured declaration
// of this kind:
// const fs = require('fs');
// fs.readFileSync ...
const {readFileSync,writeFileSync} = require('fs')
console.log('start'); // TO SHOW DIFFERENCE BETWEEN SYNC AND ASYNC FUNCTIONALITY
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

// console.log(first, second)


// this will create a file if not existent. If existent than this code will just update
// writeFileSync('./content/result-sync.txt',
// `Here is the result : ${first}, ${second}`
// )

// this will just append the result if the file is already existent:
writeFileSync('./content/result-sync.txt',
`Here is the result : ${first}, ${second}`,
{ flag: 'a'}
)
console.log('done with this task');
console.log('starting the next one');