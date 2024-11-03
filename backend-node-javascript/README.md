## Backend-node-javascript

```bash
# select a repo from github or gitlab

# download the example or clone the repo from github
git clone https://github.com/ganatan/angular-app.git

# download the example or clone the repo from gitlab
git clone https://gitlab.com/ganatan/angular-app.git

# change directory
cd angular-app
cd backend-node-javascript

# install the repo with npm
npm install

# start the server
npm start

```
in your browser go to [http://localhost:9000](http://localhost:9000) 


### Installation
* `npm install` (installing dependencies)
* `npm outdated` (verifying dependencies)

### Developpement
* `npm run start`
* in your browser [http://localhost:9000](http://localhost:9000) 

## Linter
* `npm run lint`

## Tests
* `npm run test`
* `npm run coverage`

### Compilation
* `npm run build`   

### Production
* `npm run serve`
* in your browser [http://localhost:3000](http://localhost:3000) 



# Environements

## MOCK - Fichier tools/env/.env.mock
DB_CLIENT=mock
DB_USER=mock_user
DB_PASSWORD=mock_password
JWT_SECRET=mulder
JWT_EXPIRATION=1h

## MONGODB - Fichier tools/env/.env.mongodb
DB_CLIENT=mongodb
DB_USER=mongodb_user
DB_PASSWORD=mongodb_password
MONGO_URL=mongodb://localhost:27017/angular_backend
JWT_SECRET=mulder
JWT_EXPIRATION=1h

## MYSQL - Fichier tools/env/.env.mysql
DB_CLIENT=mysql
DB_USER=root
DB_PASSWORD=Trustno1
JWT_SECRET=mulder
JWT_EXPIRATION=1h

## PG - Fichier tools/env/.env.pg
DB_CLIENT=pg
DB_USER=postgres
DB_PASSWORD=Trustno1
JWT_SECRET=mulder
JWT_EXPIRATION=1h

