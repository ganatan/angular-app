const fs = require('fs');

function writeFile(fileName, json) {
  return new Promise(function (resolve) {
    fs.writeFile(fileName, JSON.stringify(json, null, 4), function (err) {
      if (err !== null) {
        console.log(`writeFile : Error : ${err}`);
        resolve(true);
      } else {
        console.log(`- writeFile : -> { ${fileName} }`);
        resolve(false);
      }
    });
  });
}

function readFile(fileName) {
  return new Promise(function (resolve, reject) {
    let json = { error: 'file ' + fileName };
    fs.readFile(fileName, 'utf8', function (err, data) {
      if (err !== null) {
        resolve(json);
      } else {
        let readData = JSON.parse(data);
        resolve(readData);
      }
    });
  });
}

function promiseTimeout(sec) {
  return new Promise(function (resolve, reject) {
    var x = setTimeout(function () {
      console.log('execute promiseTimeout:');
      resolve("ok");
    }, 2000 * sec);
  });
}

async function getExecute() {
  console.log('getExecute:before promise');
  await promiseTimeout(1);
  let resulsTotal = [];
  let results = await readFile('file1.json');
  console.log('results: file01.json : ' + JSON.stringify(results));
  results.forEach((element) => {
    resulsTotal.push(element);
  })
  results = await readFile('file2.json');
  console.log('results: file02.json : ' + JSON.stringify(results));
  results.forEach((element) => {
    resulsTotal.push(element);
  })
  console.log('resulsTotal:' + JSON.stringify(resulsTotal));
  let writeResult = await writeFile('fileTotal.json', resulsTotal);
  console.log('writeResult : ' + writeResult);
  console.log('getExecute:after promise:');
}

async function getExecuteLoop() {
  console.log('getExecute:before promise');
  await promiseTimeout(1);
  let resulsTotal = [];
  let count = 0;
  while (count < 2) {
    count += 1;
    console.log(count);
    let fileName = `file${count}.json`;
    let results = await readFile(fileName);
    console.log('results: file01.json : ' + JSON.stringify(results));
    results.forEach((element) => {
      resulsTotal.push(element);
    })
  }
  console.log('resulsTotal:' + JSON.stringify(resulsTotal));
  let writeResult = await writeFile('fileTotalLoop.json', resulsTotal);
  console.log('writeResult : ' + writeResult);
  console.log('getExecute:after promise:');
}

getExecute();
getExecuteLoop();
