'use strict';

class ContinentRepository {
  constructor(db) {
    this.db = db;
  }

  async getItems(query = {}) {
    try {
      const sql = 'SELECT * FROM CONTINENT';
      const items = await this.db.any(sql, query);

      return items;
    } catch (error) {
      console.error('Error retrieving continents:', error);

      return null;
    }
  }
}

module.exports = ContinentRepository;
