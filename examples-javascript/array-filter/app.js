/* supprimer les doublons */
var list = [1, 3, 5, 1, 2, 3, 7, 4, 5];
var listFiltered = list.filter((value, index) => list.indexOf(value) === index);
console.log('listFiltered : ' + listFiltered);

var list2 = ['name 1 ', 'name 2 ', 'name 1 ', 'name 2 ', 'name 1 again']
const listFiltered2 = list2.filter(function (element, index) {
  console.log('00000000001:' + element);
  console.log('00000000002:' + index);
  return list2.indexOf(element) == index;
})
console.log('listFiltered2 : ' + listFiltered2);

const list3 = [
  { code: '0001', name: "name1" },
  { code: '0002', name: "name2" },
  { code: '0002', name: "name3" },
  { code: '0003', name: "name4" },
  { code: '0003', name: "name5" },
  { code: '0004', name: "name6" },
  { code: '0004', name: "name7" },
  { code: '0005', name: "name8" }
];

const listFiltered3 = [...new Map(list3.map(item => [item.code, item])).values()]
console.log('listFiltered3 : ' + JSON.stringify(listFiltered3));



/* ---------------- array.filter avec deux parametres utilisés dans les confitions de filtres --------------*/
let filterCondition0 = (param1, param2) => (element) => {
  let res = (element === param1) || (element === param2);
  return res;
}

let items0 = ['id', 'enabled', 'name', 'level'];
items0 = items0.filter(filterCondition0("id", "enabled"));
console.log('items0:' + JSON.stringify(items0))


const items1 = ['id', 'enabled', 'name', 'level'];
const results1 = items1.filter((item) => (item === 'id' || item === 'name'));
console.log('results1: ' + results1);

const items2 = ['id', 'enabled', 'name', 'level'];
const results2 = items2.filter((item) => (item === 'name'));
console.log('results2: ' + results2);

const items3 = [
  { name: 'id' },
  { name: 'enabled' },
  { name: 'name' },
  { name: 'level' }
];
const results3 = items3.filter((item) => (item.name === 'id' || item.name === 'name'));
console.log('results3: ' + JSON.stringify(results3));

const items4 = [
  { name: 'id' },
  { name: 'enabled' },
  { name: 'name' },
  { name: 'level' }
];
const results4 = items4.filter((item) => (item.name === 'name'));
console.log('results4: ' + JSON.stringify(results4));

const items5 = [
  { name: 'id', value: 1111 },
  { name: 'enabled', value: true },
  { name: 'name', value: 'example name' },
  { name: 'level', value: 'example level' },
];
const results5 = items5.filter((item) => (item.name === 'id' || item.name === 'name'));
console.log('results5: ' + JSON.stringify(results5));

const items6 = [
  { name: 'id', value: 1111 },
  { name: 'enabled', value: true },
  { name: 'name', value: 'example name 1' },
  { name: 'name', value: 'example name 2' },
  { name: 'level', value: 'example level' },
];
const results6 = items6.filter((item) => (item.name === 'name'));
console.log('results6: ' + JSON.stringify(results6));

const items7 = [
  { id: 'aaaa', title: 'dune', description: 'dune movie' },
  { id: 'bbbb', title: 'dune Part two', description: 'part two' },
  { id: 'cccc', title: 'DUNE Part one', description: 'new movie' },
  { id: 'dddd', title: 'trailer', description: 'DUNE trailer' },
  { id: 'eeee', title: 'DUNE', description: 'DUNE trailer' },
  { id: 'ffff', title: 'Alien', description: 'Alien trailer' },
];

function filterCondition(element) {
  let res = false;
  let title = element.title;
  let description = element.title;
  let condition = param;
  title = title.toUpperCase();
  condition = condition.toUpperCase();
  console.log('00000000001:' + title);
  console.log('00000000002:' + condition);
  if (title.indexOf(condition) !== -1) {
    console.log('00000000003:' + condition);
    res = true;
  };
  if (description.indexOf(condition) !== -1) {
    console.log('00000000003:' + condition);
    res = true;
  };
  return res;
}
let param = 'dune';
const results7 = items7.filter(filterCondition);

console.log('results7: ');
console.log('filter with uppercase: ' + JSON.stringify(results7));



function filterCondition8(element) {
  console.log('filterCondition8:' + JSON.stringify(element));
  console.log('filterCondition8:' + typeof element.value);
  let res = false;
  if (element.value === 2) {
    console.log('filterCondition8:true');
    res = true;
  };
  return res;
}

const items8 = [
  { "name": "- aucun -", "value": "- aucun -", "valueFieldReference": null },
  { "value": 1, "name": "budget 160", "valueFieldReference": 1 },
  { "value": 2, "name": "budget 225", "valueFieldReference": 2 }];
const results8 = items8.filter(filterCondition8);
console.log('results8: ' + JSON.stringify(results8));

