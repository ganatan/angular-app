console.log('-------------------------------');
console.log('------------------------------- concatene items1 et items2 dans itemTotal (avec doublons)');
let items1 = [
  { name: 1111 },
  { name: 2222 },
]

let items2 = [
  { name: 2222 },
  { name: 3333 },
  { name: 4444 },
]

let itemsTotal = [];
items1.forEach((element) => {
  itemsTotal.push(element);
})
items2.forEach((element) => {
  itemsTotal.push(element);
})
console.log('itemsTotal:' + JSON.stringify(itemsTotal));


console.log('');
console.log('-------------------------------');
console.log('------------------------------- concatene items3 et items4 dans itemTotal2 (avec doublons)');
console.log('------------------------------- concatene items3 et items4 dans itemTotal3 (sans doublons)');
let items3 = [
  { name: 1111 },
  { name: 2222 },
]

let items4 = [
  { name: 2222 },
  { name: 3333 },
  { name: 4444 },
]

var itemsTotal2 = items3.concat(items4);
console.log('itemsTotal2:' + JSON.stringify(itemsTotal2));

var itemsTotal3 = items3.concat(items4.filter(({ name }) => !items3.find(f => f.name == name)));
console.log('itemsTotal3:' + JSON.stringify(itemsTotal3));

console.log('');
console.log('-------------------------------');
valArray1 = [1111, 2222, 3333, 4444];
valArray2 = [5555, 6666, 7777];
objArray1 = {};
for (var k = 1; k < valArray1.length; k++) {
  var objName = 'obj' + k;
  var objValue = valArray1[k];
  objArray1[objName] = objValue;
}
console.log(JSON.stringify(objArray1));

/* ----------------------------- */
myJson = { objArray1: {}, objArray2: {} };
for (var k = 1; k < valArray1.length; k++) {
  var objName = 'obj' + k;
  var objValue = valArray1[k];
  myJson.objArray1[objName] = objValue;
}
for (var k = 1; k < valArray2.length; k++) {
  var objName = 'obj' + k;
  var objValue = valArray2[k];
  myJson.objArray2[objName] = objValue;
}
console.log(JSON.stringify(myJson));

/* ----------------------------- */
let movies = [
  { "name": "Gladiator" },
  { "name": "BlackHawk down" }
];
let details = [
  {
    data: "Gladiator data"
  },
  { data: "BlackHawk down data " }
];
let results = [];

console.log('movie:' + movies);
console.log('movie:' + JSON.stringify(movies));

movies.map((element, index) => {
  console.log('element:' + element);
  console.log('index:' + index);
  console.log('movies:' + JSON.stringify(movies[index]));
  console.log('details:' + JSON.stringify(details[index]));
  let x = movies[index]
  let y = details[index]
  let z = Object.assign(x, y)
  results.push(z);
});

console.log('results:' + JSON.stringify(results));
