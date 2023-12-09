


/*async function executeAwait() {
  console.log('0001:executeAwait');
  return 'aaaa';
}*/

function executePromise1() {
  return new Promise(function (resolve, reject) {
    var x = setTimeout(function () {
      resolve("ok");
    }, 3000);
  });
}

function executePromise1() {
  return new Promise(function (resolve, reject) {
    var x = setTimeout(function () {
      resolve("ok");
    }, 3000);
  });
}



function executePromise2() {
  return new Promise(function (resolve, reject) {
    var x = setTimeout(function () {
      resolve("ok");
    }, 2000);
  });
}



async function toto() {
  console.log('00000000001');
//  let result = await executePromise2;
  executePromise2()
    .then(res => {
      console.log('00000000002:executePromise2:' + res);
    })
  console.log('00000000002');
/*  executePromise1()
    .then(res => {
      console.log('00000000001:executePromise1:' + res);
    })
  executePromise2()
    .then(res => {
      console.log('00000000002:executePromise2:' + res);
    }) */
}

toto();




/* myPromise
  .then(res => {
    console.log('0006' + res);
  })
  .catch(err => {
    console.log('0007' + err);
  })
  .finally(err => {
    console.log('0008' + err);
  });
  */
