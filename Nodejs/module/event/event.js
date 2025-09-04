const EventEmitter = require('events');
const emitter = new EventEmitter();

// Listen to an event
emitter.on('greet', () => {
  console.log('Hello there!');
});



// Trigger (emit) the event
emitter.emit('greet');
