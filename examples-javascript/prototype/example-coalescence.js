let value = "1234";
value = null;
let res = "";
if (value !== null) {
    res = value.toUpperCase();
}

console.log('00000000001:');
console.log('00000000002:' + res);


res = value?.toUpperCase();

console.log('00000000003:');
console.log('00000000004:' + res);

value = undefined;
res = value?.toUpperCase();

console.log('00000000005:');
console.log('00000000006:' + res);


let text = '';

let noEmptyText = text || 'Hello text';
console.log('00000000007:' + noEmptyText);

let emptyText = text ?? 'text preserving with empty string';
console.log('00000000008:' + emptyText); 


let text2 = null;

let noEmptyText2 = text2 || 'Hello text';
console.log('00000000009:' + noEmptyText2);

let emptyText2 = text2 ?? 'text preserving with null';
console.log('00000000010:' + emptyText2); 


let text3 = undefined;

let noEmptyText3 = text3 || 'Hello text';
console.log('00000000011:' + noEmptyText3);

let emptyText3 = text3 ?? 'text preserving with undefined';
console.log('00000000012:' + emptyText3); 