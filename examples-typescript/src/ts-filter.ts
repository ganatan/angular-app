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
