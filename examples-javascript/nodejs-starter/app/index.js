import http from './httpserver/server.js'

import { VERSION, visible, Worker } from './httpserver/param.js'
import { VERSION2, visible2, Worker2 } from './httpserver/param2'
import { VERSION3, visible3, Worker3 } from './httpserver/param3'

/* import { VERSION2, visible2, Worker2 } from './httpserver/param2.js'
import { VERSION3, visible3, Worker3 } from './httpserver/param3.js' */

import { movie } from './httpserver/param-array.js'

const { http2 } = require('./httpserver/server2')
// import http2 from './httpserver/server2'

console.log('00000000001');

let worker = new Worker;
console.log('00000000002:' + VERSION);
console.log('00000000003:' + visible());
let toto = { "name": "name" };
console.log('00000000004:' + JSON.stringify(toto));
console.log('00000000004:' + JSON.stringify(worker));
worker.setName('Gladiator');
console.log('00000000005:' + JSON.stringify(worker));


let worker2 = new Worker2;
console.log('00000000006:' + VERSION2);
console.log('00000000007:' + visible2());
console.log('00000000008:' + JSON.stringify(worker2));
worker2.setName('Gladiator');
console.log('00000000009:' + JSON.stringify(worker2));

let worker3 = new Worker3;
console.log('00000000010:' + VERSION3);
console.log('00000000011:' + visible3());
console.log('00000000012:' + JSON.stringify(worker3));
worker3.setName('Gladiator');
console.log('00000000013:' + JSON.stringify(worker3));

console.log('00000000014:' + JSON.stringify(movie));


http();


http2();


//import { movie } from './httpserver/param-array.js'
// import http from './httpserver/server'
// const { http } = require('./httpserver/server.js')
