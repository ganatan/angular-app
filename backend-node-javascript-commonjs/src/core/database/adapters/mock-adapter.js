'use strict';

const { getMockData } = require('../mock-data-loader');
const { extractTableName } = require('../../../shared/utils/query-utils');

class MockClient {
  constructor(config) {
    this.config = config;

    if (MockClient.instance) {
      return MockClient.instance;
    }
    MockClient.instance = this;
  }

  static getInstance(dbClient) {
    if (!MockClient.instance) {
      MockClient.instance = new MockClient(dbClient);
    }

    return MockClient.instance;
  }

  async connect() {
    this.client = { connected: true };
    console.log('MockClient connected successfully');

    return true;
  }

  async query(query, params) {
    console.log('Using mock data');
    const tableName = extractTableName(query);
    const mockData = getMockData(tableName);

    if (query.includes('COUNT')) {
      return [{ count: mockData.length }];
    } else if (query.includes('WHERE id =')) {
      const id = Number(params[0]);

      return mockData.filter(item => item.id === id);
    } else if (query.includes('SELECT')) {
      return mockData;
    }

    return [];
  }

  async close() {
    this.client = null;
    console.log('MockClient connection closed');
  }
}

module.exports = MockClient;
