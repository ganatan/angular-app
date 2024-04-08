export const environment = {
  application:
  {
    name: 'angular-starter',
    angular: 'Angular 17.0.8',
    bootstrap: 'Bootstrap 5.3.2',
    fontawesome: 'Font Awesome 6.5.2',
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