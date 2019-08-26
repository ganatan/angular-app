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

var continents = require('./scripts/queries/continents');
var cities = require('./scripts/queries/cities');
var countries = require('./scripts/queries/countries');
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

router.get('/continents/count', function (req, res, next) { continents.getItemsCount(req, res, next, db); })
router.get('/continents', function (req, res, next) { continents.getItems(req, res, next, db, url); })
router.get('/continents/:id', function (req, res, next) { continents.getItem(req, res, next, db); })
router.delete('/continents/:id', function (req, res, next) { continents.deleteItem(req, res, next, db); })
router.put('/continents/:id', function (req, res, next) { continents.updateItem(req, res, next, db); })
router.post('/continents', function (req, res, next) { continents.createItem(req, res, next, db); })

router.get('/countries/count', function (req, res, next) { countries.getItemsCount(req, res, next, db); })
router.get('/countries', function (req, res, next) { countries.getItems(req, res, next, db, url); })
router.get('/countries/:id', function (req, res, next) { countries.getItem(req, res, next, db, url); })
router.get('/countries/flags/:name', function (req, res, next) { countries.getItemImage(req, res, next, db, url, true); })
router.delete('/countries/:id', function (req, res, next) { countries.deleteItem(req, res, next, db); })
router.put('/countries/:id', function (req, res, next) { countries.updateItem(req, res, next, db, url); })
router.post('/countries', function (req, res, next) { countries.createItem(req, res, next, db, url); })

router.get('/cities/count', function (req, res, next) { cities.getItemsCount(req, res, next, db); })
router.get('/cities', function (req, res, next) { cities.getItems(req, res, next, db, url); })
router.get('/cities/:id', function (req, res, next) { cities.getItem(req, res, next, db, url); })
router.delete('/cities/:id', function (req, res, next) { cities.deleteItem(req, res, next, db); })
router.put('/cities/:id', function (req, res, next) { cities.updateItem(req, res, next, db, url); })
router.post('/cities', function (req, res, next) { cities.createItem(req, res, next, db, url); })

router.get('/movies/count', function (req, res, next) { movies.getItemsCount(req, res, next, db, false); })
router.get('/movies', function (req, res, next) { movies.getItems(req, res, next, db, url, false); })
router.get('/movies/:id', function (req, res, next) { movies.getItem(req, res, next, db, url, false); })
router.get('/movies/img/:name', function (req, res, next) { movies.getItemImage(req, res, next, db, url, true); })
router.delete('/movies/:id', function (req, res, next) { movies.deleteItem(req, res, next, db, false); })
router.put('/movies/:id', function (req, res, next) { movies.updateItem(req, res, next, db, url, false); })
router.post('/movies', function (req, res, next) { movies.createItem(req, res, next, db, url, false); })

router.get('/shows/count', function (req, res, next) { movies.getItemsCount(req, res, next, db, true); })
router.get('/shows', function (req, res, next) { movies.getItems(req, res, next, db, url, true); })
router.get('/shows/:id', function (req, res, next) { movies.getItem(req, res, next, db, url, true); })
router.delete('/shows/:id', function (req, res, next) { movies.deleteItem(req, res, next, db, true); })
router.put('/shows/:id', function (req, res, next) { movies.updateItem(req, res, next, db, url, true); })
router.post('/shows', function (req, res, next) { movies.createItem(req, res, next, db, url, true); })

app.get('*', function (req, res) {
  res.json(
    {
      api: {
        "name": application,
        "framework": "express",
        "database": "postgresql"
      },
      url: [
        { "name": url + 'continents' },
        { "name": url + 'countries' },
        { "name": url + 'cities' },
        { "name": url + 'movies' },
        { "name": url + 'shows' }
      ]
    }
  );
});

app.listen(config.port, function () {
  console.log('ganatan-backend Service listening on port ' + config.port + '!');
})
