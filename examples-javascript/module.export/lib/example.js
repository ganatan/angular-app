function display1() {
  console.log('00000000001:display1');
}

function display2() {
  console.log('00000000001:display2');
}

/* module.exports = { 
  display1 ,
  display2 
} */
// or

exports.display1 = display1;
exports.display2 = display2;