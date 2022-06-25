import { Client } from 'pg';

export const connectToDatabase = (client: Client) => {
  client.connect()
    .then(() => console.log('success'))
    .catch(err => console.log(err));
};

