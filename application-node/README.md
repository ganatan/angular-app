# Angular 14 / Bootstrap 5 & CRUD REST API

## Back-end

## Database Creation with SQL & PostgreSQL
> Use the SQL scripts in postgresql-sql
- [x] create-database.sql
- [x] create-domains.sql
- [x] create-tables.sql
- [x] insert-data.sql

## Database Creation with Node.js & PostgreSQL
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


## Serving CRUD REST API with Node.js & Express & PostgreSQL
* Change settings in postgresql-express-crud/app/config
* File config/config.json
* dbUser: "postgres"
* dbPassword: "Trustno1"    !  Change the Fox Mulder password by your password

```bash

# select the repo
cd postgresql-express-crud

# install the repo with npm
npm install

# Serve CRUD REST API : development mode with nodemon
npm run dev

# Serve CRUD REST API : local mode
npm run start

# Serve CRUD REST API : production mode
npm run prod

# Serve CRUD REST API : production mode with pm2 (process manager)
pm2 start process.config.js --env prod

```

### Tests API & PostgreSQL
* in your browser [http://localhost:5004/movies](http://localhost:5004/movies) 
* in your browser [http://localhost:5004/shows](http://localhost:5004/shows) 
* in your browser [http://localhost:5004/continents](http://localhost:5004/continents) 
* in your browser [http://localhost:5004/countries](http://localhost:5004/countries) 
* in your browser [http://localhost:5004/cities](http://localhost:5004/cities) 




## Database Creation with SQL & MySQL
> Use the SQL scripts in mysql-sql
- [x] create-database.sql
- [x] create-tables.sql
- [x] insert-data.sql

## Database Creation with Node.js & MySQL
* Change settings in mysql-express-batch/app/config
* File config/config.json
* dbUser: "root" 
* dbPassword: "Trustno1"   !  Change the Fox Mulder password by your password


```bash

# select the repo
cd mysql-express-batch

# install the repo with npm
npm install

# create database and import JSON data
npm run create

# For the fun delete All data/export Files
# Export JSON data in data/export
# Check the new files (for example movies.json) 
npm run export

```


