
# Javascript : class

## forEach Source Code

```javascript
// example-foreach.js
let items = [
  { name: 'Alien' },
  { name: 'Gladiator' }
]

function getItems(items) {
  items.forEach((element, index, table) => {
    console.log('element:' + JSON.stringify(element));
    console.log('index:' + index);
    console.log('table:' + JSON.stringify(table));
  });
}

getItems(items);
```

