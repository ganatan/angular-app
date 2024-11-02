class DBConnectionManager {
  constructor(connectionService) {
    this.connectionService = connectionService;
    this.dbClient = null;
  }

  async connectDB() {
    this.dbClient = this.connectionService.createClient();
    const isConnected = await this.dbClient.connect();
    console.log(isConnected ? `Connected to ${this.dbClient.constructor.name}` : `Not Connected to ${this.dbClient.constructor.name}`);

    return isConnected;
  }

  async queryDB(query, params) {
    if (!this.dbClient) {
      throw new Error('No database client connected');
    }

    return await this.dbClient.query(query, params);
  }

  async closeDB() {
    if (this.dbClient) {
      await this.dbClient.close();
      console.log(`Connection closed to ${this.dbClient.constructor.name}`);
    }
  }
}

export default DBConnectionManager;
