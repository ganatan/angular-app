'use strict';

class ContinentRepository {
  constructor(dbClient) {
    this.dbClient = dbClient;
  }

  async getItems(filters) {
    try {
      const sql = 'SELECT * FROM CONTINENT';
      const result = await this.dbClient.query(sql);

      return result.rows;
    } catch (error) {
      console.error('Error retrieving continents:', error);

      return null;
    }
  }
}

module.exports = ContinentRepository;
