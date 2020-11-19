# Angular 11 / Bootstrap 5 & CRUD REST API
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

# For the fun delete All data/export Files
# Export JSON data in data/export
# Check the new files (for example movies.json) 
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

# Serve API REST CRUD
node server

```

### Tests API
* in your browser [http://localhost:5004/movies](http://localhost:5004/movies) 
* in your browser [http://localhost:5004/shows](http://localhost:5004/shows) 
* in your browser [http://localhost:5004/continents](http://localhost:5004/continents) 
* in your browser [http://localhost:5004/countries](http://localhost:5004/countries) 
* in your browser [http://localhost:5004/cities](http://localhost:5004/cities) 

