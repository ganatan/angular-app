
/* const { display1 } = require('./lib/example.js')
const { display2 } = require('./lib/example.js') */

// ou

const { display1 } = require('./lib/example')
//const { display2 } = require('./lib/example')

import { display2 } from './lib/example';

const display100 = require('./lib/example-module100')

console.log('00000000001:app');

display1('test');
display2('test');


display100('test');