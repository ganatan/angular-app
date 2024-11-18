'use strict';

const { MongoClient } = require('mongodb');
const MongoDBClient = require('../../adapters/mongodb-adapter');

// Mock MongoDB methods
jest.mock('mongodb', () => ({
  MongoClient: jest.fn(() => ({
    connect: jest.fn(),
    db: jest.fn(() => ({
      collection: jest.fn(() => ({
        find: jest.fn().mockReturnThis(),
        toArray: jest.fn(),
        insertOne: jest.fn(),
        updateOne: jest.fn(),
        deleteOne: jest.fn(),
      })),
    })),
    close: jest.fn(),
  })),
}));

describe('MongoDBClient', () => {
  const mockConfig = { url: 'mongodb://localhost:27017/testdb' };
  let mongoClientInstance;

  beforeEach(() => {
    MongoClient.mockClear();
    mongoClientInstance = new MongoDBClient(mockConfig);
  });

  test('should create a MongoDBClient instance', () => {
    expect(mongoClientInstance).toBeInstanceOf(MongoDBClient);
    expect(mongoClientInstance.mongoUrl).toBe(mockConfig.url);
  });

  test('should return a singleton instance', () => {
    const newMongoClientInstance = new MongoDBClient(mockConfig);
    expect(newMongoClientInstance).toBe(mongoClientInstance);
  });

  describe('connect', () => {
    test('should connect to MongoDB', async () => {
      await mongoClientInstance.connect();
      expect(mongoClientInstance.client.connect).toHaveBeenCalled();
    });

  });

  /*
  describe('query', () => {

    beforeEach(async () => {
      await mongoClientInstance.connect();
    });

    test('should throw an error for unsupported query type', async () => {
      await expect(
        mongoClientInstance.query({
          type: 'unsupported',
          collectionName: 'testCollection',
        }),
      ).rejects.toThrow('Type de requête MongoDB non pris en charge');
    });

  });
  */

  describe('close', () => {
    test('should close the MongoDB connection', async () => {
      await mongoClientInstance.connect();
      await mongoClientInstance.close();

      expect(mongoClientInstance.client.close).toHaveBeenCalled();
    });
  });
});
