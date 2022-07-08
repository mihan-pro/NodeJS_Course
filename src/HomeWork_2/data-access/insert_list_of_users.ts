import { Client } from 'pg';
import { User } from '../types';

export const insertListOfUsers = (client: Client, users: User[]) => {
  users.forEach(({ id, login, password, age, is_deleted }) => {
    client.query('INSERT INTO Users (id, login, password, age, is_deleted) VALUES ($1, $2, $3, $4, $5)', [id, login, password, age, is_deleted])
      .then(() => console.log(`User: ${login} was successfuly added`))
      .catch((err) => console.log(err));
  });
};
