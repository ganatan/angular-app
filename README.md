<p align="center">
  <h1 align="center">Angular 9 Application</h1>
  <p align="center">
    Angular 9.1.3 + Angular CLI + Angular Universal
    <br>
    Lazy Loading + SSR + PWA + SEO + google Analytics + API REST (Node.js)
    <br>
    Prototype bootstrap
    <br>
    <a href="https://angular.ganatan.com/">LIVE DEMO</a>
    <br>
    <br>
    <a href="https://angular.ganatan.com/">
      <img src="https://media.giphy.com/media/RfqiR12yhtHpwaItBq/giphy.gif" alt="Angular 9 Example Application"/>
    </a>
  </p>
</p>

## Lighthouse Audit
<img src="https://api.ganatan.org/articles/img/search-engine-optimization-avec-angular-lighthouse-after.png"/>

## Table of contents

- [Status](#status)
- [Quick start](#quick-start)
- [Front-end](#front-end)
- [Back-end](#back-end)
- [Author](#author)
- [Documentation](#documentation)

## Status

[![GitHub stars](https://img.shields.io/github/stars/ganatan/angular9-app.svg?style=social&label=Star)](https://github.com/ganatan/angular9-app)
[![GitHub forks](https://img.shields.io/github/forks/ganatan/angular9-app.svg?style=social&label=Fork)](https://github.com/ganatan/angular9-app/fork)



### Front-end : What's included
> Dependencies
- [x] Angular : 9.1.3
- [x] Angular CLI : 9.1.3
- [x] Angular Universal : 9.1.0
- [x] Bootstrap : 4.4.1
- [x] Fontawesome : 5.13.0
- [x] jquery : 3.4.1

> Features
- [x] Routing
- [x] Lazy Loading
- [x] Server Side Rendering
- [x] Progressive Web App
- [x] Responsive Layout
- [x] Search Engine Optimization (SEO)
- [x] Components
- [x] Services
- [x] inheritance
- [x] Search / Grid / Pagination
- [x] Leaflet open-source JavaScript library

### Back-end : What's included
> Dependencies
- [x] Node.js : 12.16.2
- [x] Express.js : 4.17.1
- [x] pg-promise : 10.4.4

> Features
- [x] PostgreSQL 
- [x] Database Creation
- [x] Domains Creation
- [x] Tables Creation
- [x] Importing Data
- [x] Exporting Data
- [x] RESTful API 


## Quick start

```bash
# clone the repo
git clone https://github.com/ganatan/angular9-app.git

# change directory
cd angular9-app

# install the repo with npm
npm install

# start the server
npm start

```
in your browser go to [http://localhost:4200](http://localhost:4200) 


## Front-end

### Installation
* `npm install` (installing dependencies)
* `npm outdated` (verifying dependencies)

### Developpement
* `npm run start`
* in your browser [http://localhost:4200](http://localhost:4200) 

### Settings
* you can select one of these Datasources

* Change settings in src/app/modules/application/movies-images-list
* File config/config.service.ts
* default: LOCAL JSON
* LOCAL REST API CRUD : http://localhost:5200

### Tests
* `npm run lint`
* `npm run test`
* `npm run e2e`

### Compilation
* `npm run build`       ( without SSR)
* `npm run build:ssr`   ( with SSR)

### Production
* `npm run serve:ssr`
* in your browser [http://localhost:4000](http://localhost:4000) 

### Prototype Bootstrap
* `change directory` cd ui
* launch html pages in your browser

## Back-end

### Installation
* `change directory` cd api 
* `npm install` (installing dependencies)
* `npm outdated` (verifying dependencies)

### Database Creation
* `change login and password for postgreSQL in file config.json`
* `login":"postgres"`
* `password":"your_password"`

* `npm run app` (database creation)

### Developpement
* `npm run start`
* in your browser [http://localhost:5200](http://localhost:5200) 

### Tests API
* in your browser [http://localhost:5200/movies](http://localhost:5200/movies) 

### Author
* Updated : 24/04/2020
* Author  : danny

## Documentation
English Tutorials
- Installation - https://www.ganatan.com/tutorials/build-full-web-application-with-angular
- Tutorials Step by Step - https://www.ganatan.com/tutorials/en

Tutoriels en français
- Installation - https://www.ganatan.com/tutorials/creer-application-web-complete-avec-angular
- Tutoriels Etapes par étapes - https://www.ganatan.com/tutorials
