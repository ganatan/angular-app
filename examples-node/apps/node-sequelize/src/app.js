/*
import express from 'express';
const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const app = express();
app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});
app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
*/

/*
console.log('00000000001');
const { Sequelize, DataTypes } = require('sequelize');
console.log('00000000002');
const sequelize = new Sequelize(require('config.json')['development']);
console.log('00000000003');
const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

(async () => {
  try {
    console.log('00000000004');
    await sequelize.authenticate();
    console.log('00000000005');
    console.log('Connexion à la base de données réussie.');
    await sequelize.sync({ force: true });
    const newUser = await User.create({ firstName: 'John', lastName: 'Doe' });
    console.log('Utilisateur créé :', newUser.toJSON());
  } catch (error) {
    console.error('Impossible de se connecter à la base de données:', error);
  }
})();
*/

/*
const jwtDecode = require('jwt-decode');
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
const decodedToken = jwtDecode(token);
console.log(decodedToken);
console.log('00000000001');
*/
/*
const jwt = require('jsonwebtoken');
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
const decodedToken = jwt.decode(token);
console.log('Contenu du JWT décodé :', decodedToken);
*/

console.log('00000000001');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(require('./config.json')['development']);

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connexion à la base de données réussie.');
  } catch (error) {
    console.error('Impossible de se connecter à la base de données:', error);
  }
})();

console.log('00000000001');
