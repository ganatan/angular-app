import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool: Pool = new Pool({
  host: process.env.DB_PG_HOST,
  port: Number(process.env.DB_PG_PORT),
  database: process.env.DB_PG_DATABASE,
  user: process.env.DB_PG_USER,
  password: process.env.DB_PG_PASSWORD,
});

export default pool;
