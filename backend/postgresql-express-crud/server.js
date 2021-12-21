const config = require('./app/config/config.json')[process.env.NODE_ENV || 'dev'];

const express = require('express')
const app = express()

const compression = require('compression');
const cookieParser = require('cookie-parser');
const pretty = require('express-prettify');
const cors = require('cors');

const cities = require('./app/routes/cities');
const companies = require('./app/routes/companies');
const continents = require('./app/routes/continents');
const countries = require('./app/routes/countries');
const genders = require('./app/routes/genders');
const genres = require('./app/routes/genres');
const movies = require('./app/routes/movies');
const persons = require('./app/routes/persons');
const professions = require('./app/routes/professions');
const shows = require('./app/routes/shows');
const trailers = require('./app/routes/trailers');
const users = require('./app/routes/users');
const views = require('./app/routes/views');

const index = require('./app/routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(pretty({ always: true }));
app.use(cookieParser());
app.use(compression());
app.use(cors());

app.use('/cities', cities);
app.use('/companies', companies);
app.use('/continents', continents);
app.use('/countries', countries);
app.use('/genders', genders);
app.use('/genres', genres);
app.use('/movies', movies);
app.use('/persons', persons);
app.use('/professions', professions);
app.use('/shows', shows);
app.use('/trailers', trailers);
app.use('/users', users);
app.use('/views', views);

app.use('/', index);

const port = process.env.PORT || config.port;
app.listen(port, function () {
  console.log('- PostgreSQL - Express - API RestFul CRUD');
  console.log(`- Listening on port ${port} !`);
})
