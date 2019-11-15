export const environment = {
  production: true,
  application: {
    name: 'ganatan',
    angular: 'Angular 8.2.14',
    bootstrap: 'Bootstrap 4.3.1',
  },
  config: {
    /* SELECT ONE OF THOSE CONFIGURATIONS */

    /* LOCAL JSON (NO CRUD) */
    /* api: false,
    url: './assets/params/json/', */

    /* LOCAL REST API CRUD  */
    /* api: true,
    url: 'http://localhost:5202/', */

    /* EXTERNAL REST API CRUD */
    api: true,
    url: 'https://mock.ganatan.org/',

    /* EXTERNAL REST API (NO CRUD) */
    /* api: true,
    url: 'https://api.ganatan.org/', */

  },
};
