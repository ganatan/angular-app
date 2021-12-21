const express = require('express');
const router = express.Router();

const config = require('../config/config.json')[process.env.NODE_ENV || 'dev'];

const webSite = config.webSite;
const url = config.url;
const appName = config.appName;

router.get('/', function (req, res) {
  res.json(
    {
      "appName": appName,
      "webSite": webSite,
      "moviesUrl": url + "/movies",
      "showsUrl": url + "/shows",
      "trailersUrl": url + "/trailers",
      "viewsUrl": url + "/views",
      "personsUrl": url + "/persons",
      "gendersUrl": url + "/genders",
      "professionsUrl": url + "/professions",
      "genresUrl": url + "/genres",
      "usersUrl": url + "/users",
      "continentsUrl": url + "/continents",
      "countriesUrl": url + "/countries",
      "citiesUrl": url + "/cities",
    }
  );
})

router.get('*', function (req, res) {
  res.json(
    {
      "message": "Not Found",
      "documentationUrl": webSite
    }    
  );
});

module.exports = router;

