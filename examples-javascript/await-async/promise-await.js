async function executeAwait4000() {
  console.log('00000000001:executeAwait4000');
  try {
    let item = {
      name:'1111',
    }
    console.log('00000000002:executeAwait4000');
    await executePromise4000();
    console.log('00000000003:executeAwait4000');
    return item;
  } catch (err) {
    let item = {
      name:null,
    }
    console.log('00000000004:executeAwait4000');
    console.log(`executeAwait4000:${err}`);
    console.log('00000000005:executeAwait4000');
    return item;
  }
}


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
  console.log('0000000001:serve');
  let item = await executeAwait4000();
  console.log('00000000001serveAwait:' + JSON.stringify(item));
/*  await executePromise4000();
  await executePromise2000();


  executePromise4000().then(res => {
    console.log('00000000002:serve:' + res);
    executePromise2000().then(res => {
      console.log('00000000003:serve:' + res);
    })
  })
  */


}

serveAwait();
// servePromise();