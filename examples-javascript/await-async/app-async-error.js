function add(x) {


  console.log('00000000001:add');
  return new Promise(resolve => {
    setTimeout(() => {

      console.log('00000000002:add:')
      try {
        if (x.trim() == "") throw "is empty";
        if (isNaN(x)) throw "is not a number";
        x = Number(x);
        console.log('00000000003:add:' + x)
        if (x > 10) throw "is too high";
        if (x < 5) throw "is too low";
        resolve('resolved 4000ms');
      }
      catch (err) {
        console.log('00000000004:add:' + err);
        resolve('resolved 4000ms:error');
      }
      finally {
        console.log('00000000005:add:');
      }
    }, 4000);
    console.log('00000000006:add');
  });

}

async function callAsyncFunction() {
  console.log('00000000001:callAsyncFunction');
  const result1 = await add('12');
  console.log('00000000002:callAsyncFunction:' + result1);
  const result2 = await add('7');
  console.log('00000000002:callAsyncFunction:' + result2);
}

callAsyncFunction();
