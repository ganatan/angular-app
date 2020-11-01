const tables = require('./tables');

tables.createTables('generics.json')
  .then(res => {
    console.log('- Generics Tables Creation -> Finished');
    process.exit();
  })
  .catch(err => {
    console.log('- Generics Tables Creation -> Failed');
    process.exit();
  });
