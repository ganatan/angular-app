// const { launch } = require('../app');
import { launch,launch2 } from '../app';

import { display2 } from '../lib';

test('test launch', async () => {
  console.log(`00000000001:test:launch`);
  launch();
  launch2();
  expect(true).toBe(true);
  // launch();
});


test('test lib', async () => {
  display2();
  console.log(`00000000001:test:launch`);
  expect(true).toBe(true);
  // launch();
});
