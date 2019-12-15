var config = require('./config.json')[process.env.NODE_ENV || 'dev'];

var application = config.application;
var url = config.url;
var login = config.login;
var password = config.password;
var databaseName = config.databaseName;
var promise = require('bluebird');
var options = {
  promiseLib: promise
};
const pgp = require('pg-promise')(options);
var connectionString = "postgres://" + login + ":" + password + "@localhost:5432/" + databaseName;
const db = pgp(connectionString);

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var pretty = require('express-prettify');

var movies = require('./scripts/queries/movies');

app.use('/favicon.ico', express.static('favicon.ico'));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, HEAD,POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
  next();
});

app.use(pretty({ query: 'formatted' }));
app.use(bodyParser.json());
var router = express.Router();
app.use(router);

router.get('/movies/count', function (req, res, next) { movies.getItemsCount(req, res, next, db, false); })
router.get('/movies', function (req, res, next) { movies.getItems(req, res, next, db, url, false); })
router.get('/movies/img/:name', function (req, res, next) { movies.getItemImage(req, res, next, db, url, true); })

app.get('*', function (req, res) {
  res.json(
    {
      api: {
        "name": application,
        "framework": "express",
        "database": "postgresql"
      },
      url: [
        { "name": url + 'movies' },
      ]
    }
  );
});

app.listen(config.port, function () {
  console.log('ganatan-backend Service listening on port ' + config.port + '!');
})
