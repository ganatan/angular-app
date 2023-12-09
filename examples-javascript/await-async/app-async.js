function resolvePromise2000() {
  console.log('00000000001:resolvePromise2000');
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('00000000002:resolvePromise2000');
      resolve('resolved 2000ms');
    }, 2000);
    console.log('00000000003:resolvePromise2000');
  });
}

function resolvePromise4000() {
  console.log('00000000001:resolvePromise4000');
  return new Promise(resolve => {
    setTimeout(() => {
      let x = 5 / 0;
      console.log('00000000002:resolvePromise4000:' + x);
      resolve('resolved 4000ms');
    }, 4000);
    console.log('00000000003:resolvePromise4000');
  });
}

async function callAsyncFunction() {
  console.log('00000000001:callAsyncFunction');
  const result1 = await resolvePromise4000();
  console.log('00000000002:callAsyncFunction:' + result1);
  const result2 = await resolvePromise2000();
  console.log('00000000002:callAsyncFunction:' + result2);
}

async function callAsyncFunctionTous() {
  console.log('00000000001:callAsyncFunction');
  const result1 = resolvePromise4000();
  console.log('00000000002:callAsyncFunction:' + result1);
  const result2 = resolvePromise2000();
  console.log('00000000002:callAsyncFunction:' + result2);
}


async function callAsyncFunctionWithError() {
  /*
    try {
      console.log('00000000001:callAsyncFunctionWithError');
      const result1 = await resolvePromise4000();
      console.log('00000000002:callAsyncFunctionWithError:' + result1);
      return true;
    } catch (error) {
      console.log('00000000003:callAsyncFunctionWithError:' + error);
      return false;
    } */
  resolvePromise4000().then(
    res => {
      console.log('00000000001:' + res);
    }
  )
}

// callAsyncFunction();
// let result = callAsyncFunctionWithError();

callAsyncFunctionTous();
