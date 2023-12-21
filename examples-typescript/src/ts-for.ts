console.log('-------------------------------');
console.log('------------------------------- while sur un array et selection d\'un element');
let items = [
  { name: '1111', enabled: false, checked: false },
  { name: '2222', enabled: false, checked: true },
  { name: '3333', enabled: true, checked: false },
  { name: '4444', enabled: true, checked: true },
  { name: '5555', enabled: true, checked: true },
]
let first: string = '';
for (let i = 0; i < items.length; i++) {
  console.log('name:' + items[i]['name']);
  if ((items[i]['enabled']) && (items[i]['checked'])) {
    if (first === '') {
      first = items[i]['name'];
    }
  }
}
console.log('first name:' + first);