
/* const { display1 } = require('./lib/example-class.js')
import { display2 } from './lib/example-class';

const { LoggerFactory } = require('./lib/example-class.js') */


const { display1 } = require('./lib/example-class')
import { display2 } from './lib/example-class';

const { LoggerFactory } = require('./lib/example-class')

const loggerFactory = new LoggerFactory();
const logger = loggerFactory.getLogger();

console.log('00000000001:app:' + logger);

display1('test');
display2('test');

