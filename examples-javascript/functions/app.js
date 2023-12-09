function functionDeclaration() {
  console.log('00000000001:functionDeclaration');
}
functionDeclaration();

let functionExpression = function () {
  console.log('00000000001:functionExpression');
}
functionExpression();


const functionExpressionConstNew = new function () {
  console.log('00000000001:functionExpression:via const et new');
}

const functionExpressionConst = function () {
  console.log('00000000001:functionExpression:via const');
}
functionExpressionConst();

const functionExpressionVar = function () {
  console.log('00000000001:functionExpression:via var');
}
functionExpressionVar();

var constFunctionFlechee = function functionFlechee() {
  console.log('00000000001:constFunctionFlechee');
};
constFunctionFlechee();

// arrow function
var constFunctionFlechee2 = function () {
  console.log('00000000001:constFunctionFlechee2');
};
constFunctionFlechee2();

var varArrowFunction = () => {
  console.log('00000000001:varArrowFunction');
};
varArrowFunction();



var varArrowFunction2 = (a, b) => a + b;
let varArrowFunction3 = (a, b) => {
  console.log('00000000001:' + varArrowFunction2(4, 5));
  return a + b;
};
console.log('00000000001:' + varArrowFunction2(4, 5));
console.log('00000000001:' + varArrowFunction3(10, 20));


// arrow function
var varArrowFunction4 = (param1, param2) => {
  console.log('00000000001:varArrowFunction4:' + param1);
  console.log('00000000002:varArrowFunction4:' + param2);
};

varArrowFunction4(10, 20);

// fonction anonyme
const riri = function momo() {
  console.log('00000000001:momo');
}
riri();

// fonction 
const loulou = function momo() {
  console.log('00000000001:loulou');
}
loulou();