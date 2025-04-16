import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_PG_SEQUELIZE_DATABASE,
  process.env.DB_PG_SEQUELIZE_USER,
  process.env.DB_PG_SEQUELIZE_PASSWORD,
  {
    host: process.env.DB_PG_SEQUELIZE_HOST,
    port: Number(process.env.DB_PG_SEQUELIZE_PORT),
    dialect: 'postgres',
    logging: false,
  },
);

export default sequelize;
