const tables = require('./tables');

tables.executeCreate('items.json')
  .then(res => {
    if (res) {
      console.log('- Tables creation -> started');
    } else {
      console.log('- Database Creation failed - >');
    }
    process.exit();
  })
  .catch(err => {
    console.log('- Create Database : failed -> { ' + err + ' }');
    process.exit();
  });
