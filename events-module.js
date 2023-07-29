const EventEmitter = require('events');
const emitter = new EventEmitter();  // create an instance of the class

// register a listener 
emitter.on('nameOfEvent', function(){
    console.log('listener called');
});

// raise an event 
emitter.emit('nameOfEvent');