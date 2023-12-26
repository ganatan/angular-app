/* ---------------- array.filter avec deux parametres utilisés dans les conditions de filtres --------------*/
let filterCondition0 = (param1: any, param2: any) => (element: any) => {
  let res = (element === param1) || (element === param2);
  return res;
}

let items0 = ['id', 'enabled', 'name', 'level'];
items0 = items0.filter(filterCondition0("id", "enabled"));
console.log('items0:' + JSON.stringify(items0))

/* ---------------- array.filter sur un objet json --------------*/
const items01 = [
  { name: 'id' },
  { name: 'enabled' },
  { name: 'name' },
  { name: 'level' }
];
const results01 = items01.filter((item) => (item.name === 'id' || item.name === 'name'));
console.log('results1: ' + JSON.stringify(results01));



function formatCondition(condition: string) {
  let res = condition;
  res = res.replace(new RegExp('Ō', 'g'), 'O');
  res = res.replace(new RegExp('Ô', 'g'), 'O');
  res = res.replace(new RegExp(' ', 'g'), '');
  res = res.toUpperCase();
  return res;
}
let text = formatCondition('SHŌGUN-PREMIÈREBANDE-ANNONCE(VOST)|DISNEY+');
console.log('text:' + text);