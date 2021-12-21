# Angular 13 / Bootstrap 5 & CRUD REST API
## Back-end

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

### Tests API
* in your browser [http://localhost:5004/movies](http://localhost:5004/movies) 
* in your browser [http://localhost:5004/shows](http://localhost:5004/shows) 
* in your browser [http://localhost:5004/continents](http://localhost:5004/continents) 
* in your browser [http://localhost:5004/countries](http://localhost:5004/countries) 
* in your browser [http://localhost:5004/cities](http://localhost:5004/cities) 

