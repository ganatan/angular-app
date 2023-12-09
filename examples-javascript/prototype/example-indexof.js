let field1 = "";
let field2 = "";
let field3 = "";
let fieldMulti1 = false;
let fieldMulti2 = false;
// let field = "test@gmail.com";
let field = "test@gmail.com@level";
let index1 = 0;
let index2 = 0;
let len1 = 0;
let len2 = 0;
index1 = field.indexOf("@");
if (index1 !== -1) {
  fieldMulti1 = true;
  len1 = field.length;
  field1 = field.substring(0, index1);
  field2 = field.substring(index1 + 1, len1 + 1);
  field = field2;
  index2 = field.indexOf("@");
  if (index2 !== -1) {
    fieldMulti2 = true;
    len2 = field.length;
    field2 = field.substring(0, index2);
    field3 = field.substring(index2 + 1, len2 + 1);
  }
}

console.log('00000000001:' + fieldMulti1);
console.log('00000000002:' + fieldMulti2);
console.log('00000000003:' + index1);
console.log('00000000004:' + index2);
console.log('00000000005:' + field1);
console.log('00000000006:' + field2);
console.log('00000000007:' + field3);



/* 
let field = "test@gmail.com";
let index1 = field.indexOf("@");
let len1 = field.length;
let field1 = field.substring(0, index1);
let field2 = field.substring(index1 + 1, len1 + 1);


if (index !== -1) {


console.log('00000000001:' + field1);
console.log('00000000001:' + field2);
console.log('00000000001:' + index1);

let fieldA = "test@gmail.com@level";
let indexA = fieldA.indexOf("@");

console.log('00000000001:' + fieldA);
console.log('00000000001:' + indexA);
*/