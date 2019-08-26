var tools = require('./tables');

tools.createTables('items.json').then(function (res) {
  console.log(res);
  process.exit();
}, function (err) {
  console.log(err);
  process.exit();
});

