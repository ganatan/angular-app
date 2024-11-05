'use strict';

const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');

const dbConfig = {
  url: 'mongodb://localhost:27017',
  database: 'angular_backend',
};

let db;

const app = express();
app.use(bodyParser.json());

app.get('/continents', async (req, res) => {
  try {
    const continents = await db
      .collection('continent')
      .find({})
      .toArray();


    res.json(continents);
  } catch (error) {
    console.error('Error fetching continents:', error.message);
    res.status(500).json({ error: 'An error occurred while fetching continents' });
  }
});

const startServer = async () => {
  try {
    const client = await MongoClient.connect(dbConfig.url);
    db = client.db(dbConfig.database);
    console.log('Connected to MongoDB database');
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server started on port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to MongoDB database:', error.message);
    process.exit(1);
  }
};

startServer();
