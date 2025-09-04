const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.once('start', () => {
  console.log('Started only once');
});

emitter.emit('start'); // Triggers
emitter.emit('start'); // Won't trigger
