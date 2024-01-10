function executePromise4sec() {
  try {
    console.log('executePromise4sec::start');
    let res = new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve("4 sec");
      }, 4000);
    });
    console.log('executePromise4sec:end');
    return res;

  } catch (err) {
    console.log(`- Error executePromise4sec -> ${err}`);

    return 0;
  }
}

function executePromise1sec() {
  try {
    console.log('executePromise1sec:start');
    let res = new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve("1 sec");
      }, 1000);
    });
    console.log('executePromise1sec:end');
    return res;
  } catch (err) {
    console.log(`- Error executePromise2sec -> ${err}`);

    return 0;
  }
}

async function serveAwait() {
/*
  let res = await executePromise4sec();
  console.log('res: ' + res);
  res = await executePromise1sec();
  console.log('res: ' + res);
  res = await executePromise4sec();
  console.log('res: ' + res);
  */

  executePromise4sec()
  .then(res1 => {
    console.log('res1: ' + res1);
    executePromise1sec()
      .then(res2 => {
        console.log('res2: ' + res2);
        executePromise4sec()
          .then(res3 => {
            console.log('res3: ' + res3);
            resolve(1111);
          });
      });
  });


}

serveAwait();
