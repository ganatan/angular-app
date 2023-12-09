console.log('00000000001:index');

import display1 from './test-default.js'

import { display2 } from './test-not-default.js'

import { display3,display4 } from './test-not-default-multi.js'


const tab = [false, false, false, false, false];

display1(tab);
display2(tab);
display3(tab);
display4(tab);
