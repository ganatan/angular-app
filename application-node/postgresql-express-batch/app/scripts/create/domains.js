const db = require("../../db/connection");

function createOneDomain(name, dataType, defaultValue) {
  return new Promise(function (resolve, reject) {
    let sql = 'CREATE DOMAIN ' + name + ' AS ' + dataType;
    if (defaultValue) { sql = sql + ' DEFAULT ' + defaultValue; }
    db.any(sql)
      .then(function () {
        console.log('- Domain Created -> { ' + name + ' }');
        resolve(true);
      })
      .catch(function (err) {
        console.log('- Domain Creation : Failed -> { ' + name + ' } - { ' + err + ' }');
        reject(false);
      });
  });
}

function createDomains() {
  return new Promise(function (resolve, reject) {
    console.log('- Domains Creation -> Started');
    Promise.all([
      createOneDomain('dom_boolean', 'boolean', 'false'),
      createOneDomain('dom_char', 'char(1)', ''),
      createOneDomain('dom_comment', 'varchar(200)', ''),
      createOneDomain('dom_comment_long', 'varchar(400)', ''),
      createOneDomain('dom_comment_xlong', 'varchar(1000)', ''),
      createOneDomain('dom_lib', 'varchar(50)', ''),
      createOneDomain('dom_lib_short', 'varchar(20)', ''),
      createOneDomain('dom_lib_long', 'varchar(100)', ''),
      createOneDomain('dom_lib_xlong', 'varchar(200)', ''),
      createOneDomain('dom_text', 'text', ''),
      createOneDomain('dom_date', 'date', ''),
      createOneDomain('dom_datetime', 'timestamp with time zone', ''),
      createOneDomain('dom_time', 'time', ''),
      createOneDomain('dom_float', 'float', '0'),
      createOneDomain('dom_fk', 'integer', '111'),
      createOneDomain('dom_pk', 'integer', ''),
      createOneDomain('dom_integer', 'integer', '0'),
      createOneDomain('dom_bigint', 'bigint', '0'),
      createOneDomain('dom_numeric', 'numeric(15,2)', '0'),
      createOneDomain('dom_uuid', 'uuid', '')])
      .then((res) => {
        resolve(true);
      })
      .catch((err) => {
        reject(false);
      });
  });
}

createDomains()
  .then(res => {
    console.log('- Domains Creation -> Finished');
    process.exit();
  })
  .catch(err => {
    console.log('- Domains Creation -> Failed');
    process.exit();
  });