
let text = 'https://example.com/param1.jpg 140w, https://example.com/param2.jpg 210w, https://example.com/param3.jpg 280w';

let param1 = '';
let param2 = '';
let param3 = '';

let index1 = text.indexOf("https");
let index2 = text.indexOf("https", index1 + 1);
let index3 = text.indexOf("https", index2 + 1);

param1 = text.substring(index1, index2 - 2)
param2 = text.substring(index2, index3 - 2)
param3 = text.substring(index3, text.length)

console.log('index1:' + index1);
console.log('index2:' + index2);
console.log('index3:' + index3);


console.log('param1:' + param1);
console.log('param2:' + param2);
console.log('param3:' + param3);
