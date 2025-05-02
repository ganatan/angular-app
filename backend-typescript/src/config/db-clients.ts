const DB_CLIENTS = {
  MOCK: 'mock',
  MYSQL: 'mysql',
  MARIADB: 'mariadb',
  PG: 'pg',
  SQLITE: 'sqlite',
  MSSQL: 'mssql',
  ORACLE: 'oracle',
  DB2: 'db2',
  MONGO: 'mongo',
  REDIS: 'redis',
  CASSANDRA: 'cassandra',
  FIREBASE: 'firebase',
  NEO4J: 'neo4j',
  ELASTICSEARCH: 'elasticsearch',
} as const;

type DbClient = keyof typeof DB_CLIENTS;
type DbClientValue = typeof DB_CLIENTS[DbClient];

export { DbClient, DbClientValue };
export default DB_CLIENTS;
