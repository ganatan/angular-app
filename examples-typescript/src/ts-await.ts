function executePromise4000() {
  return new Promise(function (resolve, reject) {
    console.log('00000000001:executePromise4000');
    var x = setTimeout(function () {
      console.log('00000000002:executePromise4000');
      resolve("ok");
    }, 4000);
    console.log('00000000003:executePromise4000');
  });
}


function executePromise2000() {
  return new Promise(function (resolve, reject) {
    console.log('00000000001:executePromise2000');
    var x = setTimeout(function () {
      console.log('00000000002:executePromise2000');
      resolve("ok");
    }, 4000);
    console.log('00000000003:executePromise2000');
  });
}

function servePromise() {
  console.log('0000000001:serve');

  executePromise4000().then(res => {
    console.log('00000000002:serve:' + res);

    executePromise2000().then(res => {
      console.log('00000000003:serve:' + res);
    })
  })

}

async function serveAwait() {
  console.log('0000000001:serveAwait');
  let item = await executePromise4000();
  console.log('00000000002:serveAwait:' + JSON.stringify(item));
  item = await executePromise2000();
  console.log('00000000003:serveAwait:' + JSON.stringify(item));
}

serveAwait();
// servePromise();

