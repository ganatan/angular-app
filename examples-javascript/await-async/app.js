function launchTimeout() {
  return new Promise(function (resolve, reject) {
    console.log('00000000001:launchTimeout');
    setTimeout(() => {
      resolve('resolved:2000ms');
    }, 2000)
  });
}

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("promise done:4000ms"), 4000)
});


function laucnhPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("promise2 done : 1000ms"), 1000)
  })
};

let promise2 = laucnhPromise();

promise2.then(res => {
  console.log('00000000001:promise2:' + res);
})

promise1.then(res => {
  console.log('00000000001:promise1' + res);
})

launchTimeout().then(res => {
  console.log('00000000001:launchTimeout:' + res);
})

