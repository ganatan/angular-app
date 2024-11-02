'use strict';

const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');

const dbConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'angular_backend',
  password: 'Trustno1',
  port: 5432,
};

const pool = new Pool(dbConfig);

const app = express();
app.use(bodyParser.json());

app.get('/continents', async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    const query = 'SELECT * FROM continent ORDER BY name LIMIT $1 OFFSET $2';
    const values = [parseInt(limit), parseInt(offset)];

    const result = await pool.query(query, values);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching continents:', error.message);
    res.status(500).json({ error: 'An error occurred while fetching continents' });
  }
});

const startServer = async () => {
  try {
    await pool.connect();
    console.log('Connected to PostgreSQL database');

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server started on port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to PostgreSQL database:', error.message);
    process.exit(1);
  }
};

startServer();
