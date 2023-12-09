/* console.log('0000000001:example-spreadsyntax:');

const numbers = [1, 2, 3];

function display(numbers) {
  console.log('0000000001:display:');
  console.log('0000000002:display:' + JSON.stringify(numbers));
}

display(numbers);
display(...numbers);



function sumNumbers(x, y, z) {
  console.log('00000000001:sumNumbers:');
  console.log('00000000001:sumNumbers:' + x);
  console.log('00000000001:sumNumbers:' + y);
  console.log('00000000001:sumNumbers:' + z);
  return x + y + z;
}

const list = [1, 2, 3];

console.log('0000000003:display:' + sumNumbers(...list));
console.log('0000000004:display:' + sumNumbers(list)); */


function test(param1, param2) {
  console.log('param1:' + param1);
  console.log('param1:' + JSON.stringify(param1));
  console.log('param2:' + param2);
  console.log('param2:' + JSON.stringify(param2));
}

console.log('00000000001:');
test('00001', '00002');
console.log('00000000002:');
test();
console.log('00000000003:');
test(null, null);
console.log('00000000004:');
test(undefined, undefined);
console.log('00000000005:');
test([1, 2, 3], [1, 2, 3]);
console.log('00000000006:');
test({ name: 'alien' }, { name: 'gladiator' });
console.log('00000000007:');
let spreadVar = [
  { name: 'prometheus' },
  { name: 'covenant' }]
test(...spreadVar);
console.log('00000000008:');


