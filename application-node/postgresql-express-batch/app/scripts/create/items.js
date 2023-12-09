const tables = require('./tables');

tables.createTables('items.json')
  .then(res => {
    console.log('- Items Tables Creation -> Finished');
    process.exit();
  })
  .catch(err => {
    console.log('- Items Tables Creation -> Failed');
    process.exit();
  });
