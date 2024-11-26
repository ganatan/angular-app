'use strict';

const { MongoClient } = require('mongodb');

class MongoDBClient {
  constructor(config) {
    this.mongoUrl = config.url;

    if (MongoDBClient.instance) {
      return MongoDBClient.instance;
    }
    MongoDBClient.instance = this;
  }

  static getInstance(dbClient) {
    if (!MongoDBClient.instance) {
      MongoDBClient.instance = new MongoDBClient(dbClient);
    }

    return MongoDBClient.instance;
  }

  async connect() {
    try {
      const dbConfig = { url: '' };
      const mongoUrl = process.env.MONGO_URL || dbConfig.url;
      this.client = new MongoClient(mongoUrl);
      await this.client.connect();
      this.db = this.client.db();
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }

  async query(query) {
    try {
      const collection = this.db.collection(query.collectionName);
      let result;
      switch (query.type) {
        case 'find':
          result = await collection.find(query.filter).toArray();
          break;
        case 'insert':
          result = await collection.insertOne(query.data);
          break;
        case 'update':
          result = await collection.updateOne(query.filter, { $set: query.data });
          break;
        case 'delete':
          result = await collection.deleteOne(query.filter);
          break;
        default:
          throw new Error('Unsupported MongoDB query type');
      }

      return result;
    } catch (error) {
      console.error('Error executing MongoDB query:', error);
      throw error;
    }
  }

  async close() {
    await this.client.close();
  }
}

module.exports = MongoDBClient;
