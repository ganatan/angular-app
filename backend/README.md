# Angular 10 / Bootstrap 5 & CRUD REST API
## Back-end

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
* dbPassword: "Trustno1"   !  Change the Fox Mulder password by your password


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
* dbPassword: "Trustno1"    !  Change the Fox Mulder password by your password

```bash

# select the repo
cd postgresql-express-crud

# install the repo with npm
npm install

# create database and import JSON data
node server

```

### Tests API
* in your browser [http://localhost:5204/movies](http://localhost:5204/movies) 
* in your browser [http://localhost:5204/shows](http://localhost:5204/shows) 
* in your browser [http://localhost:5204/continents](http://localhost:5204/continents) 
* in your browser [http://localhost:5204/countries](http://localhost:5204/countries) 
* in your browser [http://localhost:5204/cities](http://localhost:5204/cities) 

