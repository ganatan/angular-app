
let value;
let valueNull = null;
let valueUndefined = undefined;
let valueEmpty = '';
let valueEmpty2 = "";
let valueOk = "First value";

console.log('00000000001:' + value);
console.log('00000000002:' + valueNull);
console.log('00000000003:' + valueUndefined);
console.log('00000000004:' + valueEmpty);
console.log('00000000005:' + valueEmpty2);
console.log('00000000006:' + valueOk);


/* let res = value ? 'other value';
console.log('00000000007:' + res); */

const favoriteFruit = null;
const result = favoriteFruit ?? 'You did not tell me';
console.log(result);


function getFee(isMember) {
  let param1 = 'true';
  let res = param1 && (isMember ? '$2.00' : '$10.00');
  return res;
}

console.log(getFee(true));
// Expected output: "$2.00"

console.log(getFee(false));
// Expected output: "$10.00"

console.log(getFee(null));
// Expected output: "$10.00"



function getCondition(condition) {
  let res = condition ? 'get true' : 'get false';
  return res;
}

console.log('00000000001');
let res = getCondition(true);
console.log('00000000002:' + res);
res = getCondition(false);
console.log('00000000003:' + res);

let selectEnfant = {
  item: {
    'nom': 'nom',
    'prenom': 'prenom'
  }
}

let item = {
  nom: selectEnfant && selectEnfant.item && selectEnfant.item.nom ? selectEnfant.item.nom : null,
  prenom: selectEnfant && selectEnfant.item && selectEnfant.item.prenom ? selectEnfant.item.prenom : null
}

console.log('00000000004:' + item);
console.log('00000000005:' + JSON.stringify(item));


const a = { duration: 50 };

a.duration ??= 10;
console.log('00000000006:' + a.duration);


a.speed ??= 25;
console.log('00000000007:' + a.speed);

