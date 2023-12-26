let item = {
  field01: "Gladiator",
  field02: "Ridley Scott",
};

console.log('item:' + JSON.stringify(item));

let size = Object.keys(item).length;
console.log('item:size:' + size);

let keys = Object.keys(item);
console.log('item:keys:' + keys);

let map = [];
keys.map((element) => {
  console.log('item:keys:element:' + element);
  map.push({
    [element]: element,
  });
});
console.log('map:' + JSON.stringify(map));

