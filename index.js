const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((request, response) => {
    // Build file path
    let filePath = path.join(__dirname, 'public', request.url === '/' ? 'index.html' : request.url);

    // get extension of a file
    let extname = path.extname(filePath);

    // set initial content type
    let contentType = 'text/html'

    // check extension and set content type
    switch(extname){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }
    // read file
    fs.readFile(filePath, (err, content) => {
        if(err){
            // err usually means page not found
            if(err.code == 'ENOENT'){

            }
        }
    })
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// ____________________________________________________________________________________________________________________________
    // console.log(request.url) shows what url is being called 
    // if(request.url === '/'){
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if(err) throw err;
    //         response.writeHead(200, { 'Content-Type': 'text/html'});
    //         // adds content-type to header
    //         response.end(content);
    //         // response.end() can be used instead of response.write().end()
    //     })
    // }
    // if(request.url === '/about'){
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if(err) throw err;
    //             response.writeHead(200, { 'Content-Type': 'text/html'});
    //             // adds content-type to header
    //             response.end(content);
    //             // response.end() can be used instead of response.write().end()
    //         })
    
        // response.end() can be used instead of response.write().end()
    // }