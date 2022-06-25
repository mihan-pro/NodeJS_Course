import { Client } from 'pg';

export const DB_Client =  new Client({
  port: 5432,
  host: 'localhost',
  database: 'postgres',
  user: 'postgres'
});
