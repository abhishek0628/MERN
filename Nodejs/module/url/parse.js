const url = require('url');

const myUrl = url.parse('https://example.com:8080/path/name?query=123#hash');

console.log(myUrl.hostname);  // example.com
console.log(myUrl.port);      // 8080
console.log(myUrl.pathname);  // /path/name
console.log(myUrl.query);     // query=123
