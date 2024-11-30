'use strict';

class ContinentRepository {
  constructor(dbClient) {
    this.dbClient = dbClient;
  }

  async getItems(query = {}) {
    try {
      const sql = 'SELECT * FROM CONTINENT';
      const items = await this.dbClient.any(sql, query);

      return items;
    } catch (error) {
      console.error('Error retrieving continents:', error);

      return null;
    }
  }
}

module.exports = ContinentRepository;
