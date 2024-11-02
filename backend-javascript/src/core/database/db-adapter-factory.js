class DBAdapterFactory {
  static instance = null;

  constructor(dbClients) {
    if (DBAdapterFactory.instance) {
      return DBAdapterFactory.instance;
    }
    this.dbClients = dbClients;
    DBAdapterFactory.instance = this;
  }

  static getInstance(dbClients) {
    if (!DBAdapterFactory.instance) {
      DBAdapterFactory.instance = new DBAdapterFactory(dbClients);
    }

    return DBAdapterFactory.instance;
  }

  createClient(config) {
    let Client = this.dbClients[config.db.client];
    if (!Client) {
      console.warn(`Unsupported database client: ${config.db.client}. Using MockClient as fallback.`);
      Client = this.dbClients['mock'];
    }

    return Client.getInstance ? Client.getInstance(config.db) : new Client(config.db);
  }
}

export default DBAdapterFactory;
