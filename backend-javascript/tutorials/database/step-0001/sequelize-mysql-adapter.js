'use strict';

const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const bodyParser = require('body-parser');

const dbConfig = {
  database: 'angular_backend',
  username: 'root',
  password: 'Trustno1',
  host: 'localhost',
  dialect: 'mysql',
};

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  logging: false,
});

const Continent = sequelize.define('Continent', {
  code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  wikipediaLink: {
    type: DataTypes.STRING,
    field: 'wikipedia_link',
  },
  area: {
    type: DataTypes.INTEGER,
  },
  population: {
    type: DataTypes.BIGINT,
  },
  countriesNumber: {
    type: DataTypes.INTEGER,
    field: 'countries_number',
  },
}, {
  tableName: 'continent',
  timestamps: false,
});

const app = express();
app.use(bodyParser.json());

app.get('/continents', async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    const continents = await Continent.findAll({
      offset: parseInt(offset),
      limit: parseInt(limit),
      order: [['name', 'ASC']],
    });

    res.json(continents);
  } catch (error) {
    console.error('Error fetching continents:', error.message);
    res.status(500).json({ error: 'An error occurred while fetching continents' });
  }
});

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to MySQL database with Sequelize');

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to MySQL database:', error.message);
    process.exit(1);
  }
};

startServer();
