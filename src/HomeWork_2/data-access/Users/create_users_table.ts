import { Client } from 'pg';

export const createUsersTable = (client: Client) => {
  client.query('CREATE TABLE IF NOT EXISTS Users(id UUID, login TEXT, password TEXT, age INTEGER, is_deleted BOOL)')
    .then(() => console.log('Users table is ready to use'))
    .catch(err => console.log(err));
};
