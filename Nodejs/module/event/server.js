const http = require('http');
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on('requestReceived', (url) => {
  console.log(`Request for ${url}`);
});

const server = http.createServer((req, res) => {
  myEmitter.emit('requestReceived', req.url);
  res.end('Done');
});

server.listen(3000, () => console.log('Server running on 3000'));
