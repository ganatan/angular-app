
/*

console.log('00000000001:');

function example() {
  console.log('00000000002:example');
}

example();

function createDatabase () {
  return new Promise(function (resolve, reject) {
    console.log('00000000003:createDatabase');
    setTimeout(() => {
      resolve('resolved');
    }, 2000)
  });
}

var maFonctionAsynchrone = function (req) {
  console.log('00000000004:maFonctionAsynchrone');
  createDatabase();
  console.log('00000000005:maFonctionAsynchrone');
}

maFonctionAsynchrone();

*/

/* async function executeAwait() {
  console.log('0001:executeAwait');
  return 'aaaa';
}

function executePromise() {
  console.log('0001');
  return new Promise(function (resolve, reject) {
    console.log('0002');
    var x = setTimeout(function () {
      console.log('0003');
      resolve("ok");
    }, 1000);
    console.log('0004');
  });
  console.log('0005');
}

const myPromise = executePromise();
myPromise
  .then(res => {
    console.log('0006' + res);
    executeAwait().then(res2 => {
      console.log('0006' + res2);
    })
  })
  .catch(err => {
    console.log('0007' + err);
  })
  .finally(err => {
    console.log('0008' + err);
  }); */




