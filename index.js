const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((request, response) => {
    // console.log(request.url) shows what url is being called 
    if(request.url === '/'){
        response.writeHead(200, { 'Content-Type': 'text/html'});
        // adds content-type to header
        response.end('<h1>Home</h1>');
        // response.end() can be used instead of response.write().end()
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));