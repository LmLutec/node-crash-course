const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Get the serialized url
console.log(myUrl.href);

// Get the host(root domain)
console.log(myUrl.host);

// Get host name (does not grab port number)
console.log(myUrl.hostname);

//  Get pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Create a params object
console.log(myUrl.searchParams);

// add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))