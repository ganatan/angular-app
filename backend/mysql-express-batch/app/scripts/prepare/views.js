const db = require("../../db/connection");
const fs = require('fs');
const dateformat = require('dateformat');
const moment = require('moment');

let captions = "Views";
let caption = "View";
let file = "views.json";

const config = require('../../config/config.json')[process.env.NODE_ENV || 'dev'];

const createItems = new Promise(
  function (resolve, reject) {
    console.log(captions + ' Import');
    const fileName = './data/import/' + file;
    fs.readFile(fileName, 'utf8', function (err, data) {
      if (err) reject(err);
      let promises = [];
      let number = 0;
      let nowDate = Date.UTC(1979, 12, 20);
      let items = JSON.parse(data);
      let counter = 10;
      for (let i = 0, len = counter; i < counter; ++i) {
        number = number + 1;
        let calcDate = moment(nowDate).add(number - 1, 'days');
        let calcDateStr = dateformat(calcDate, 'yyyy-mm-dd');
        let calcCode = "0".repeat(8 - String(i).length) + i;
        let item = { "id": 1000 + i, "code": calcCode, "createDate": calcDateStr };
        promises.push(createItem(item));
      }
      Promise.all(promises).then((res) => {
        resolve(res);
      }).catch((err) => {
        console.log('Error on ' + captions + ' :');
        reject(err);
      });
    });
  }
);

function createItem(item) {
  return new Promise(function (resolve, reject) {
    let values = {
      code: item.code,
      createDate: item.createDate,
    };
    console.log('Create views ' + item.code);
    let sql = 'INSERT INTO views' +
      ' (' +
      ' code' +
      ',create_date' +
      ' ) VALUES' +
      ' (' +
      ' ${code}' +
      ',${createDate}' +
      ' )';
    db.any(sql, values)
      .then((result) => {
        console.log('Promise Create views ' + item.code);
        resolve(caption + ' ' + item.code + ' Created');
      }).catch((err) => {
        console.log('Error on ' + caption + ' :' + item.code);
        reject(err);
      });
  });
}

Promise.all([
  createItems,
]).then((res) => {
  console.log('Data updated!');
  Promise.all([
  ]).then((res) => {
    process.exit();
  });
}).catch((err) => {
  console.log(err);
  process.exit();
}); 

