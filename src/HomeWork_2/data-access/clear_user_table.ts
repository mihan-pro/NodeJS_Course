import { Client } from 'pg';

export const clearUserTable = (client: Client) => {
  client.query('DELETE FROM Users')
    .then(() => console.log('Users table was cleared'))
    .catch(err => console.log(err)
    );
};
