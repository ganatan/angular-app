'use strict';

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('backend_javascript', 'postgres', 'Trustno1', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  logging: false,
});

const Person = sequelize.define('Person', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'person',
  timestamps: false,
});

async function getItems(req, res) {
  try {
    const persons = await Person.findAll({
      order: [['id', 'ASC']],
      attributes: ['id', 'name'],
    });

    res.json({
      success: true,
      data: persons,
    });
  } catch (error) {
    console.error('Sequelize error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
}

module.exports = getItems;

