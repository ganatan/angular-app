'use strict';

const express = require('express');
const mysql = require('mysql2/promise'); 
const bodyParser = require('body-parser');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  database: 'angular_backend',
  password: 'Trustno1',
  port: 3306,
};

let connection;

const app = express();
app.use(bodyParser.json());

app.get('/continents', async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    const query = 'SELECT * FROM continent ORDER BY name';
    const values = [parseInt(limit), parseInt(offset)];

    const [rows] = await connection.execute(query, values);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching continents:', error.message);
    res.status(500).json({ error: 'An error occurred while fetching continents' });
  }
});

const startServer = async () => {
  try {
    connection = await mysql.createConnection(dbConfig);
    console.log('Connected to MySQL database');

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
