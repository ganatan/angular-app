export const environment = {
  production: true,
  application:
  {
    name: 'angular-starter',
    angular: 'Angular 14.2.7',
    bootstrap: 'Bootstrap 5.2.2',
    fontawesome: 'Font Awesome 6.2.0',
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