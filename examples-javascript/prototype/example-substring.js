
// start: position ou le substring commence
// end : dernier element non pris en compte

//          0123456789001234567890 
let data = 'abcdefghijklmnopqrstuvwxyz';

let res = data.substring(4, 5);
console.log('0000000001:' + res);

res = data.substring(0, 4);
console.log('0000000001:' + res);


res = data.substring(3, 7);
console.log('0000000001:' + res);

