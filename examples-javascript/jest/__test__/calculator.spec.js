const { add, subtract, multiply } = require('../calculator');

test('test add', async () => {
  console.log(`00000000001:test:add`);
  expect(add(5, 5)).toStrictEqual(10);
  expect(add(10, 5)).toStrictEqual(100);
});

test('test substract', async () => {
  console.log(`00000000001:test:substract`);
  expect(subtract(10, 9)).toStrictEqual(1);
});

test('test multiply', async () => {
  console.log(`00000000001:test:multiply`);
  expect(multiply(10, 10)).toStrictEqual(100);
});
