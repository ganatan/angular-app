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
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;

    // const continents = await this.db.collection('continent').find().toArray();
    /*    const continents2 = await db
        .collection('continent')
        .find({})
        */
    

    const continents = await db
      .collection('continent')
      .find({})
      .toArray();

    const query = {
      type: 'find',
      collectionName: 'continent',
      filter: {},
    };
    const collection = db.collection(query.collectionName);
    const result2 = await collection.find(query.filter).toArray();

    /*
    const continents = await db
      .collection('continent')
      .find({})
      .sort({ name: 1 })
      .skip(parseInt(skip))
      .limit(parseInt(limit))
      .toArray();
      */

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
