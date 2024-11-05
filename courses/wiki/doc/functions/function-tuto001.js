function showMediaWithNoReturn() {
  console.log('wiki:showMediaWithNoReturn');
}

let resWithNoReturn = showMediaWithNoReturn();
console.log('return:' + resWithNoReturn);


function showMediaWithReturn() {
  console.log('showMediaWithReturn');
  return 'return showMediaWithReturn';
}

let resWithReturn = showMediaWithReturn();
console.log('return :' + resWithReturn);


