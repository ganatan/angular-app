
const item = {
  name: 'name_value',
  wikipedia: 'wikipedia_value',
};

const itemData = {
  name: item['name'],
  wikipedia: item['wikipedia'],
};

const data = [
  { name: 'name' },
  { name: 'wikipedia' },
];

console.log('itemData:' + JSON.stringify(itemData));

let mapData = [];
data.map((element) => {
  mapData.push({
    [element['name']]: element['name'],
  });
});
console.log('item:keys:element:' + JSON.stringify(mapData));


const items = {
  name: data['name'],
  wikipedia: data['wikipedia'],
};

console.log('00000000001:' + JSON.stringify(items));
