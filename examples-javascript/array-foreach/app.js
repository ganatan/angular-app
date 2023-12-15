/* -------------------------------------------------------------- */
let arrayString = ['aaaa', 'bbbb', 'cccc', 'dddd']

arrayString.forEach((param1, param2, param3) => {
  console.log('param1:' + param1);
  console.log('param2:' + param2);
  console.log('param3:' + param3);
});

arrayString.forEach((item) => console.log('arrayString: forEach1:' + item));
arrayString.forEach(item => {
  console.log('arrayString: forEach2:' + item);
})

arrayString.forEach((item, index) => {
  console.log('arrayString: forEach and index:' + index + ':' + item);
})

for (i = 0; i < arrayString.length; i++) {
  console.log('arrayString: for:' + arrayString[i]);
}

/* -------------------------------------------------------------- */
let arrayObject = [
  { name: 'aaaa', description: 'desc aaaa' },
  { name: 'bbbb', description: 'desc bbbb' },
  { name: 'cccc', description: 'desc cccc' },
  { name: 'dddd', description: 'desc dddd' },
]
arrayObject.forEach(item => {
  console.log('arrayObject: forEach:' + item.unknown);
  console.log('arrayObject: forEach:' + item.name);
  console.log('arrayObject: forEach:' + item['name']);
  console.log('arrayObject: forEach:' + item['description']);
})

/* -------------------------------------------------------------- */
let objectWithArray =
{
  "name": "name aaaa",
  "code": {
    "value": "code aaaa",
  },
  "items": [
    {
      "name": "name item1",
      "code": {
        "value": "code value item1"
      }
    },
    {
      "name": "name item2",
      "code": {
        "value": "code value item2"
      }
    }
  ]
}
let arrayItems = objectWithArray.items;
arrayItems.forEach(item => {
  console.log('arrayItems: forEach: item:' + JSON.stringify(item));
  console.log('arrayItems: forEach: name:' + item.name);
  console.log('arrayItems: forEach: name:' + item['name']);
  console.log('arrayItems: forEach: code.value:' + item.code.value);
  console.log('arrayItems: forEach: code.value:' + item['code']['value']);
})
