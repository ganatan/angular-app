let item = {
  'nameItem': 'name',
  'releaseDateItem': 'releaseDate',
  'movieItem': true,
  'franchiseItem': false,
}


console.log('00000000001:' + item);
console.log('00000000002:' + JSON.stringify(item));

function getItem(item) {
  return item;
}

let res = getItem(item);
console.log('00000000003:' + JSON.stringify(res));


const { nameItem, movieItem } = getItem(item);
console.log('00000000004:' + nameItem);
console.log('00000000005:' + movieItem);