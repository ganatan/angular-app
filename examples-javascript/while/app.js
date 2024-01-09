/*------- while avec condition -------*/

let countInit = 0;

while (countInit < 3) {
  countInit += 1;
  console.log('countInit: ' + countInit);
}

/*------- while 4 tentatives si test non reussi -------*/

function getApp(param) {
  let res = false;
  if (param === 3) {
    res = true;
  }
  console.log('Execute: getApp: Param: ' + param)
  return res;
}

let countTry = 4;
let countActive = 1;
let processAppOk = false;

while ((countActive <= countTry) && !processAppOk) {
  processAppOk = getApp(countActive);
  console.log('processApp : Try:' + countActive + ' processAppOk Result: ' + processAppOk);
  countActive += 1;
}



