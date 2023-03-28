export const environment = {
  production: false,
  application:
  {
    name: 'angular-starter',
    angular: 'Angular 15.2.4',
    bootstrap: 'Bootstrap 5.2.4',
    fontawesome: 'Font Awesome 6.4.0',
  },
  urlNews: './assets/params/json/mock/trailers.json',
  urlMovies: './assets/params/json/mock/movies.json',

  /* urlNews: 'http://localhost:5004/trailers', */
  // url: 'https://api.ganatan.com/tutorials',

  config: {
    /* SELECT ONE OF THOSE CONFIGURATIONS */

    /* LOCAL JSON (NO CRUD) */
    api: false,
    url: './assets/params/json/crud/',

    /* LOCAL REST API CRUD WITH POSTGRESQL */
    /* api: true,
    url: 'http://localhost:5004/', */
  },
};