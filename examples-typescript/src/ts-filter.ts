/* ---------------- array.filter avec deux parametres utilisés dans les confitions de filtres --------------*/
let filterCondition0 = (param1: any, param2: any) => (element: any) => {
    let res = (element === param1) || (element === param2);
    return res;
}

let items0 = ['id', 'enabled', 'name', 'level'];
items0 = items0.filter(filterCondition0("id", "enabled"));
console.log('items0:' + JSON.stringify(items0))


