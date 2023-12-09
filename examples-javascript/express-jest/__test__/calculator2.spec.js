const { add2, subtract2, multiply2 } = require('../calculator2');

test('test add', async () => {
  console.log(`00000000001:test:add`);
  expect(add2(5, 5)).toStrictEqual(10);
});

test('test substract', async () => {
  console.log(`00000000001:test:substract`);
  expect(subtract2(10, 9)).toStrictEqual(1);
});

test('test multiply', async () => {
  console.log(`00000000001:test:multiply`);
  expect(multiply2(10, 10)).toStrictEqual(100);
});
