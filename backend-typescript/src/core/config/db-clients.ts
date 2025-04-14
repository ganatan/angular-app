export const DB_CLIENTS = {
  MOCK: 'mock',
  MYSQL: 'mysql',
  PG: 'pg',
} as const;

export type DbClientType = typeof DB_CLIENTS[keyof typeof DB_CLIENTS];

export default DB_CLIENTS;
