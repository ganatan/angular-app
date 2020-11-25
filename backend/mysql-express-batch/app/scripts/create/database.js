const config = require('../../config/config.json')[process.env.NODE_ENV || 'dev'];
const database = require('../../db/connection');

const databaseName = config.dbName;

async function dropDatabase(db) {
  try {
    await db.query('DROP DATABASE ' + databaseName);
    console.log('- DROP DATABASE -> Executed');
    return true;
  }
  catch (err) {
    console.log('- DROP DATABASE -> Failed - { ' + err + ' }');
    return false;
  }
}

async function createDatabase(db) {
  try {
    await db.query('CREATE DATABASE ' + databaseName);
    console.log('- CREATE DATABASE -> Executed');
    return true;
  }
  catch (err) {
    console.log('- CREATE DATABASE -> Failed { ' + err + ' }');
    return false;
  }
}

async function executeCreate() {
  try {
    console.log('- Database Creation started -> DatabaseName - { ' + databaseName + ' }');
    db = await database.connection(true);
    if (db != null) {
      await dropDatabase(db);
      return await createDatabase(db);
    } else {
      return false;
    }
  }
  catch (err) {
    console.log('- Database Creation started {' + err + ' }');
    return false;
  }
}

executeCreate()
  .then(res => {
    if (res) {
      console.log('- Database Creation finished - > DatabaseName - { ' + databaseName + ' }');
    } else {
      console.log('- Database Creation failed - > { ' + databaseName + ' }');
    }
    process.exit();
  })
  .catch(err => {
    console.log('- Create Database : failed -> { ' + err + ' }');
    console.log('- Database Creation failed - > { ' + databaseName + ' }');
    process.exit();
  });


