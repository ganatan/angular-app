let months = ['01', '02', '03', '04'];
console.log('00000000001:' + months);

// start: position ou le splice commence
// deleteCount: nombre d'élément remplacé
// items : Liste des éléments rajoutés
// splice(start: number, deleteCount: number, ...items;

months.splice(0, 1, '11');
console.log('00000000002:' + months);


months = ['01', '02', '03', '04'];
console.log('00000000001:' + months);
months.splice(0, 2, '11','22');
console.log('00000000002:' + months);

