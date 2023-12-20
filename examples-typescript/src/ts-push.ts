console.log('-------------------------------');
console.log('------------------------------- concatene items1 et items2 dans itemTotal (avec doublons)');
let items1: any;
items1 = [
  { name: 1111 },
  { name: 2222 },
]

let items2 = [
  { name: 2222 },
  { name: 3333 },
  { name: 4444 },
]

let itemsTotal = [];
items1.forEach((element: any) => {
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

const itemsTotal3 = [];
itemsTotal2.forEach((value) => {
  if (!itemsTotal3.some(x => (x.name === value.name))) {
    itemsTotal3.push(value)
  }
})
console.log('itemsTotal3:' + JSON.stringify(itemsTotal3));