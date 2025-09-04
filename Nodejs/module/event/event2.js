const EventEmitter = require('events');
const emitter = new EventEmitter();

// Listen to an event
// emitter.on('greet', () => {
//   console.log('Hello there!');
// });
emitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

emitter.emit('greet', 'Abhishek');


// Trigger (emit) the event
// emitter.emit('greet');