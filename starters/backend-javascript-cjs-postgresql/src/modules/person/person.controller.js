'use strict';

const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'Trustno1',
  database: 'backend_javascript',
});

async function getItems(req, res) {
  try {
    const result = await pool.query('SELECT id, name FROM person ORDER BY id ASC');

    res.json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    console.error('Database error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
}

module.exports = getItems;
