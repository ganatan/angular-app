/*
const foo = null ?? 'default string';
console.log(foo);

const baz = 0 ?? 42;
console.log(baz);
*/

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


let res = value || 'other value';
console.log('00000000007:' + res);

res = valueNull || 'other value';
console.log('00000000008:' + res);

res = valueUndefined || 'other value';
console.log('00000000009:' + res);

res = valueEmpty || 'other value';
console.log('00000000010:' + res);

res = valueEmpty2 || 'other value';
console.log('00000000011:' + res);

res = valueOk || 'other value';
console.log('00000000012:' + res);


