const items1 = ['id', 'enabled', 'name', 'level'];
const results1 = items1.filter((item) => (item === 'id' || item === 'name'));
console.log(results1);

const items2 = ['id', 'enabled', 'name', 'level'];
const results2 = items2.filter((item) => (item === 'name'));
console.log(results2);

const items3 = [
  { name: 'id' },
  { name: 'enabled' },
  { name: 'name' },
  { name: 'level' }
];
const results3 = items3.filter((item) => (item.name === 'id' || item.name === 'name'));
console.log(results3);

const items4 = [
  { name: 'id' },
  { name: 'enabled' },
  { name: 'name' },
  { name: 'level' }
];
const results4 = items4.filter((item) => (item.name === 'name'));
console.log(results4);

const items5 = [
  { name: 'id', value: 1111 },
  { name: 'enabled', value: true },
  { name: 'name', value: 'example name' },
  { name: 'level', value: 'example level' },
];
const results5 = items5.filter((item) => (item.name === 'id' || item.name === 'name'));
console.log(results5);

const items6 = [
  { name: 'id', value: 1111 },
  { name: 'enabled', value: true },
  { name: 'name', value: 'example name' },
  { name: 'level', value: 'example level' },
];
const results6 = items6.filter((item) => (item.name === 'name'));
console.log(results6);
