// import display1 from './lib/lib1';
const { display1 } = require('./lib/lib1')
console.log('00000000001:index');

const app = async () => {
  console.log('000000000000000000003:index:');
  try {
    await display1();
    console.log('000000000000000000004:index:');
  } catch (error) {
    console.log('000000000000000000005:index:');
  }
};

app();
