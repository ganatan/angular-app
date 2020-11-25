const config = require('../config/config.json')[process.env.NODE_ENV || 'dev'];
const mysql = require('mysql2/promise');
const bluebird = require('bluebird');

const databaseType = config.databaseType;

async function connection(creation) {
  let url = 'my://' + config.dbUser + ':*******' + '@' + config.dbHost + ':' + config.dbPort;
  try {
    let dbName = config.dbName;
    if (creation) { dbName = null }
    const db = await mysql.createConnection({
      host: config.dbHost,
      user: config.dbUser,
      password: config.dbPassword,
      database: dbName,
      Promise: bluebird
    });
    console.log('- ' + databaseType + ' Server Connection -> { ' + url + ' }');
    console.log('- Connection Started');
    return db;
  }
  catch (err) {
    console.log('- ' + databaseType + ' Server Connection -> { ' + url + ' }');
    console.log('- Connection failed -> { ' + err + ' }');
    return null;
  }
}

module.exports = {
  connection: connection,
};

