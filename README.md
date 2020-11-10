# Angular 10 / Bootstrap 5 & CRUD REST API

<table>
<tr>
<td>
  <a href="https://www.ganatan.com/en">
    <img src="./img/ganatan-about-github.png" align="right"
    alt="Ganatan Angular Example Demo" width="140" height="140">
  </a>

it's a repo designed to create a **Web Application with Angular 10**


* Frontend - [**Angular 10.2.2**](https://github.com/angular/angular/releases) & [**Angular CLI 10.2.0**](https://github.com/angular/angular-cli/releases/)

* UI prototypes - [**bootstrap 5**](https://v5.getbootstrap.com/docs/5.0/getting-started/download/) & [**bootstrap 4**](https://getbootstrap.com/docs/4.5/getting-started/download/)

* Backend - CRUD REST API [**PostgreSQL**](https://www.postgresql.org/download/)

* See the [**Live demo**](#live-demo), Test the repo with [**Quick start**](#quick-start) and for more information Read the step by step [**Tutorial**](#tutorial) or read the [**Getting started**](#getting-started)

* And if you want to [**support**](#support)
:star: Star us on GitHub

</td>
</tr>
</table>

# [Live Demo](#live-demo)
Here is a working live demo :  https://angular.ganatan.com/


<p align="center">
  <p align="center">
    <a href="https://angular.ganatan.com/">
      <img src="https://media.giphy.com/media/RfqiR12yhtHpwaItBq/giphy.gif" alt="Angular 10 Example Application"/>
    </a>
  </p>
</p>




## Lighthouse Audit
<img src="https://api.ganatan.com/articles/img/search-engine-optimization-avec-angular-lighthouse-after.png"/>

## Table of contents

- [Status](#status)
- [Quick start](#quick-start)
- [Front-end](#front-end)
- [Back-end](#back-end)
- [Author](#author)
- [Documentation](#documentation)

## Status

[![GitHub stars](https://img.shields.io/github/stars/ganatan/angular10-app.svg?style=social&label=Star)](https://github.com/ganatan/angular10-app)
[![GitHub forks](https://img.shields.io/github/forks/ganatan/angular10-app.svg?style=social&label=Fork)](https://github.com/ganatan/angular10-app/fork)

### Front-end : What's included
> Dependencies
- [x] Angular : 10.2.1
- [x] Angular CLI : 10.2.0
- [x] Angular Universal : 10.1.0
- [x] Bootstrap : 5.0.0-alpha1
- [x] Fontawesome : 5.15.1
- [x] jquery : 3.5.1

> Features
- [x] Routing
- [x] Lazy Loading
- [x] Server Side Rendering
- [x] Progressive Web App
- [x] Responsive Layout
- [x] Search Engine Optimization (SEO)
- [x] Components
- [x] Services
- [x] Reactive Form
- [x] Template Driven Forms
- [x] Search / Grid / Pagination
- [x] Leaflet

## Quick start

```bash
# clone the repo
git clone https://github.com/ganatan/angular10-app.git

# change directory
cd angular10-app

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
* LOCAL REST API CRUD : http://localhost:5004

## Tests
* `npm run lint`
* `npm run test`
* `npm run e2e`

### Compilation
* `npm run build`       ( without SSR)
* `npm run build:ssr`   ( with SSR)

### Production
* `npm run serve:ssr`
* in your browser [http://localhost:4000](http://localhost:4000) 

### Bootstrap UI Prototypes 
* `change directory` cd ui (Bootstrap 4) or ui-v5 (Bootstrap 5)
* Launch html pages in your browser



## Back-end

### Back-end : What's included

> Tools
- [x] postgresql-express-batch (with Node.js)
- [x] postgresql-express-crud (with Node.js and Express)
- [x] postgresql-sql (with SQL Scripts)

> Features
- [x] Database Creation
- [x] Domains Creation
- [x] Tables Creation
- [x] Importing Data
- [x] Exporting Data
- [x] Serving RESTful CRUD API 


## Database Creation with SQL
> Use the SQL scripts in postgresql-sql
- [x] create-database.sql
- [x] create-domains.sql
- [x] create-tables.sql
- [x] insert-data.sql


## Database Creation with Node.js
* Change settings in postgresql-express-batch/app/config
* File config/config.json
* dbUser: "postgres" 
* dbPassword: "Trustno1"   ! Change the Fox Mulder password by your password


```bash

# select the repo
cd postgresql-express-batch

# install the repo with npm
npm install

# create database and import JSON data
npm run create

# export JSON data in data/export
npm run export

```


## Serving CRUD REST API with Node.js & Express
* Change settings in postgresql-express-crud/app/config
* File config/config.json
* dbUser: "postgres"
* dbPassword: "Trustno1"    ! Change the Fox Mulder password by your password

```bash

# select the repo
cd postgresql-express-crud

# install the repo with npm
npm install

# Serve API REST CRUD
node server

```

### Tests API
* in your browser [http://localhost:5004/movies](http://localhost:5004/movies) 
* in your browser [http://localhost:5004/shows](http://localhost:5004/shows) 
* in your browser [http://localhost:5004/continents](http://localhost:5004/continents) 
* in your browser [http://localhost:5004/countries](http://localhost:5004/countries) 
* in your browser [http://localhost:5004/cities](http://localhost:5004/cities) 

### Author
* Updated : 10/11/2020
* Author  : danny

## Documentation
English Tutorials
- Step by Step - https://www.ganatan.com/tutorials/en

Tutoriels en français
- Etapes par étapes - https://www.ganatan.com/tutorials
