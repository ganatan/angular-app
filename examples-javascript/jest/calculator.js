const add = (a, b) => {
  console.log(`00000000001:add:parama ${a}`);
  console.log(`00000000002:add:paramb ${b}`);
  let res = a + b;
  if (a === 10) {
    res = 100;
  }
  console.log(`00000000003:add:result ${res}`);
  return res;
};

const subtract = (a, b) => {
  console.log(`00000000001:subtract`);
  return a - b;
};

const multiply = (a, b) => {
  console.log(`00000000001:multiply`);
  return a * b;
};

module.exports = {
  add,
  subtract,
  multiply,
};
