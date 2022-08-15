import { Client } from 'pg';

export const DB_Client =  new Client({
  port: process.env.DB_CONNECTION_PORT,
  host: process.env.DB_CONNECTION_HOST,
  database: process.env.DB_CONNECTION_DB_NAME,
  user: process.env.DB_CONNECTION_USER
});
