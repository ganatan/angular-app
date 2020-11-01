const db = require("../connection");

var createDomains = new Promise(
  function (resolve, reject) {
    console.log('Domains Creation');
    Promise.all([
      createDomain('dom_boolean', 'boolean', 'false', 'NULL'),
      createDomain('dom_char', 'char(1)', '', 'NULL'),
      createDomain('dom_comment', 'varchar(200)', '', 'NULL'),
      createDomain('dom_comment_long', 'varchar(400)', '', 'NULL'),
      createDomain('dom_comment_xlong', 'varchar(1000)', '', 'NULL'),
      createDomain('dom_date', 'date', '', 'NULL'),
      createDomain('dom_datetime', 'timestamp with time zone', '', 'NULL'),
      createDomain('dom_float', 'float', '', 'NULL'),
      createDomain('dom_fk', 'integer', '111', 'NULL'),
      createDomain('dom_integer', 'integer', '', 'NULL'),
      createDomain('dom_bigint', 'bigint', '', 'NULL'),
      createDomain('dom_lib', 'varchar(50)', '', 'NULL'),
      createDomain('dom_lib_long', 'varchar(100)', '', 'NULL'),
      createDomain('dom_lib_xlong', 'varchar(200)', '', 'NULL'),
      createDomain('dom_lib_short', 'varchar(20)', '', 'NULL'),
      createDomain('dom_text', 'text', '', 'NULL'),
      createDomain('dom_numeric', 'numeric(15,2)', '', 'NULL'),
      createDomain('dom_pk', 'integer', '', 'NULL'),
      createDomain('dom_uuid', 'uuid', '', 'NULL')]).then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
  });

function createDomain(name, dataType, defaultValue, nullable) {
  return new Promise(function (resolve, reject) {
    request = 'CREATE DOMAIN ' + name + ' ' + dataType;
    if (defaultValue) {
      request = request + ' DEFAULT ' + defaultValue;
    }
    request = request + ' ' + nullable;
    db.any(request).then(function () {
      resolve('Domain ' + name + ' Created');
    }).catch(function (err) {
      reject(err);
    });
  });
}

createDomains.then(function (res) {
  console.log(res);
  process.exit();
}, function (err) {
  console.log(err);
  process.exit();
});