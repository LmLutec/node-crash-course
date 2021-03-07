const http = require('http');

// create a server object
http.createServer((request, response) => {
    // when we get a request, we want to write response
    response.write('Hello world');
    response.end()
}).listen(5000, () => console.log('server running'));
// listens on port 5000
