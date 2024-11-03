import mysql from 'mysql2/promise';

class MySQLClient {
  constructor(config) {
    this.config = config;
    if (MySQLClient.instance) {
      return MySQLClient.instance;
    }
    MySQLClient.instance = this;
  }

  static getInstance(dbClient) {
    if (!MySQLClient.instance) {
      MySQLClient.instance = new MySQLClient(dbClient);
    }

    return MySQLClient.instance;
  }

  async connect() {
    this.client = await mysql.createConnection({
      host: this.config.host,
      user: this.config.user,
      password: this.config.password,
      database: this.config.database,
    });
  }

  async query(query, params) {
    try {
      const [rows] = await this.client.execute(query, params);

      return rows;
    } catch (error) {
      console.error('Erreur lors de l’exécution de la requête MySQL:', error);
      throw error;
    }
  }

  async close() {
    await this.client.end();
  }
}

export default MySQLClient;
