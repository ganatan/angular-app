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

const connectToDB = async () => {
  if (!db) {
    const client = await MongoClient.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true });
    db = client.db(dbConfig.database);
    console.log('Connected to MongoDB database');
  }
  return db;
};

app.get('/continents', async (req, res) => {
  try {
    const db = await connectToDB();
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;

    const continents = await db
      .collection('continent')
      .find({})
      .sort({ name: 1 })
      .skip(parseInt(skip, 10))
      .limit(parseInt(limit, 10))
      .toArray();

    res.json(continents);
  } catch (error) {
    console.error('Error fetching continents:', error.message);
    res.status(500).json({ error: 'An error occurred while fetching continents' });
  }
});

/*
  {
    "code": "AA",
    "name": "aaaaaa-mock",
    "wikipediaLink": "aaaaaa",
    "area": 30370000,
    "population": 1287920000,
    "countriesNumber": 54
  }
*/

app.post('/continents', async (req, res) => {
  try {
    const db = await connectToDB();
    const countersCollection = db.collection('counters');
    const continentCollection = db.collection('continent');
    const newId = await getNextSequenceValue(countersCollection, 'continent');

    const continentData = {
      id: newId,
      code: req.body.code,
      name: req.body.name,
      wikipediaLink: req.body.wikipediaLink,
      area: req.body.area,
      population: req.body.population,
      countriesNumber: req.body.countriesNumber,
    };
    const result = await continentCollection.insertOne(continentData);
    res.status(201).json(result[0]); 
  } catch (error) {
    console.error('Error during insertion:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

const startServer = async () => {
  try {
    await connectToDB();  // Ensure DB connection before starting server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to MongoDB database:', error.message);
    process.exit(1);
  }
};

async function getNextSequenceValue(collection, collectionName) {
  const counter = await collection.findOneAndUpdate(
    { collectionName },
    { $inc: { sequenceValue: 1 } },
    { returnDocument: 'after', upsert: true }
  );
  return counter.sequenceValue;
}

startServer();



/*


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

    const continents = await db
      .collection('continent')
      .find({})
      .sort({ name: 1 })
      .skip(parseInt(skip))
      .limit(parseInt(limit))
      .toArray();

    res.json(continents);
  } catch (error) {
    console.error('Error fetching continents:', error.message);
    res.status(500).json({ error: 'An error occurred while fetching continents' });
  }
});

  {
    "code": "AA",
    "name": "aaaaaa-mock",
    "wikipediaLink": "aaaaaa",
    "area": 30370000,
    "population": 1287920000,
    "countriesNumber": 54
  }


app.post('/continents', async (req, res) => {
  try {
    const db = await connectToDB();
    const countersCollection = db.collection('counters');
    const continentCollection = db.collection('continent');
    const newId = await getNextSequenceValue(countersCollection, 'continent');
    const continentData = {
      id: newId,
      code: req.body.code,
      name: req.body.name,
      wikipediaLink: req.body.wikipediaLink,
      area: req.body.area,
      population: req.body.population,
      countriesNumber: req.body.countriesNumber,
    };

    const result = await continentCollection.insertOne(continentData);
    res.status(201).json(result.ops[0]);
  } catch (error) {
    console.error('Erreur lors de l’insertion:', error);
    res.status(500).json({ message: 'Erreur du serveur' });
  }
});

const startServer = async () => {
  try {
    const client = await MongoClient.connect(dbConfig.url);
    db = client.db(dbConfig.database);
    console.log('Connected to MongoDB database');

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to MongoDB database:', error.message);
    process.exit(1);
  }
};

async function getNextSequenceValue(collection, collectionName) {
  const counter = await collection.findOneAndUpdate(
    { collectionName },
    { $inc: { sequenceValue: 1 } },
    { returnDocument: 'after', upsert: true }
  );
  return counter.value.sequenceValue;
}


startServer();

*/
