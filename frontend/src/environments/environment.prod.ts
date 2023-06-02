export const environment = {
  production: true,
  application:
  {
    name: 'angular-starter',
    angular: 'Angular 16.0.4',
    bootstrap: 'Bootstrap 5.3.0',
    fontawesome: 'Font Awesome 6.4.0',
  },
  urlNews: './assets/params/json/mock/trailers.json',
  /*   urlNews: 'http://localhost:5004/trailers', */

  urlMovies: './assets/params/json/mock/movies.json',
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