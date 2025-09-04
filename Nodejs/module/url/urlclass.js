const { URL } = require('url');

const myUrl = new URL('https://example.com:8080/path/name?query=123#hash');

console.log(myUrl.hostname);   // example.com
console.log(myUrl.port);       // 8080
console.log(myUrl.pathname);   // /path/name
console.log(myUrl.search);     // ?query=123
console.log(myUrl.searchParams.get('query')); // 123
