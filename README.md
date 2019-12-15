# Angular 8 Example Application

[Live Demo](https://angular.ganatan.com) | [Installation Guidelines](https://www.ganatan.com/tutorials/build-full-web-application-with-angular)

## Front-end with Angular 8 - Back-end with Node.js
<a target="_blank" href="https://angular.ganatan.com"><img src="https://api.ganatan.org/articles/img/angular-example-app.png"/></a>

### Front end : What's included
> Dependencies
- Angular : 8.2.14
- Angular CLI : 8.3.20
- Angular Universal : 8.1.1
- Bootstrap : 4.4.1
- Fontawesome : 5.12.0
- jquery : 3.4.1

> Features
- Routing
- Lazy Loading
- Server Side Rendering
- Progressive Web App
- Responsive Layout
- Search Engine Optimization (SEO)
- Components
- Services
- inheritance
- ReactiveForms
- Search / Grid / Pagination

### Back end : What's included
> Dependencies
- Node.js : 12.13.0
- Express.js : 4.17.1
- pg-promise : 10.2.1

> Features
- PostgreSQL 
- Database Creation
- Domains Creation
- Tables Creation
- Importing Data
- Exporting Data
- RESTful API 
- CRUD

## Quick start

```bash
# clone the repo
git clone https://github.com/ganatan/angular8-app.git

# change directory
cd angular8-app

# install the repo with npm
npm install

# start the server
npm start

```
in your browser go to [http://localhost:4200](http://localhost:4200) 


## Getting Started / Front-end

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
* default: LOCAL JSON (NO CRUD)
* LOCAL REST API CRUD : http://localhost:5200

### Tests
* `npm run lint`
* `npm run test`
* `npm run e2e`

## Getting Started / Back-end

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
* Updated : 15/12/19
* Author  : danny

## Documentation

English Tutorials
- Installation - https://www.ganatan.com/tutorials/build-full-web-application-with-angular
- Tutorials Step by Step - https://www.ganatan.com/tutorials/en

Tutoriels en français
- Installation - https://www.ganatan.com/tutorials/creer-application-web-complete-avec-angular
- Tutoriels Etapes par étapes - https://www.ganatan.com/tutorials
