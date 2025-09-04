const http = require('http');
const { URL } = require('url');

http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  console.log(parsedUrl.pathname);
  console.log(parsedUrl.searchParams.get('id'));
  res.end('Check console');
}).listen(3000);
