let item = { name: '1111' };
console.log('item:' + JSON.stringify(item));

let variable = 'toto';
let item2 = { variable: '1111' };
// item2.push({ name2: '2222' });
console.log('item:' + JSON.stringify(item2));


valArray1 = [1111, 2222, 3333, 4444];
valArray2 = [5555, 6666, 7777];
objArray1 = {};
for (var k = 1; k < valArray1.length; k++) {
  var objName = 'obj' + k;
  var objValue = valArray1[k];
  objArray1[objName] = objValue;
}
console.log(JSON.stringify(objArray1));

/*myJson = { objArray1: {}, objArray2: {} };
for (var k = 1; k < valArray1.length; k++) {
  var objName = 'obj' + k;
  var objValue = valArray1[k];
  myJson.objArray1[objName] = objValue;
}*/
/*for (var k = 1; k < valArray2.length; k++) {
  var objName = 'obj' + k;
  var objValue = valArray2[k];
  myJson.objArray2[objName] = objValue;
}
console.log(JSON.stringify(myJson));*/


/* let movies = [
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
*/
