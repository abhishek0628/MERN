const EventEmitter = require('events');
const emitter = new EventEmitter();
function sayHi() {
  console.log('Hi');
}

emitter.on('hi', sayHi);
emitter.removeListener('hi', sayHi); // or emitter.off('hi', sayHi);
emitter.emit('hi'); // Nothing happens
