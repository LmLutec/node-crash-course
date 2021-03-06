const fs = require('fs');
const path = require('path');

// create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err;
//     console.log('Folder created...');
// });

// create a file and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
//     if(err) throw err;
//     console.log('File written to');
// // to add to file without overwriting
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love node js!', err => {
//         if(err) throw err;
//         console.log('File written to');
//     });
// });

// read file 
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });

// rename a file 
// fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), err => {
//     if(err) throw err;
//     console.log('Folder renamed.');
// });