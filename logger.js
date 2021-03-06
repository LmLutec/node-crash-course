const EventEmitter = require('events');
const uuid = require('uuid');
// generates an id
// console.log(uuid.v4());

class Logger extends EventEmitter {
    log(msg){
        // call event
        this.emit('message', { id: uuid.v4(), msg });
        // emits an event called message with an id, and add the msg at the end
    }
}

module.exports = Logger;

// ________________________________________________________________
// previously in index.js
// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', (data) => console.log('called listener', data))

// logger.log('Hello world');
// logger.log('Hello');