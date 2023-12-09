/* import { display2 } from './test2.js';
const { display } = require('./test.js'); */
// import { display1, display2 } from './api/http/server';

// import display1 from './api/http/server/lib1';
// import display1 from './lib/lib1';
import display1 from './lib1';
console.log('00000000001:index');


const app = async () => {
  console.log('000000000000000000003:index:');
  try {
    await display1();
    /*    await display1();
        await display2(); */
    console.log('000000000000000000004:index:');
  } catch (error) {
    console.log('000000000000000000005:index:');
  }
};

app();




/* const tab = [false, false, false, false, false];
display(tab);
display2(tab); */
