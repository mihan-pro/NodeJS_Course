import { Sequelize } from 'sequelize';

export const checkConnection = (client: Sequelize) => {
  client.authenticate()
    .then(() => console.log('connection is alive'))
    .catch(() => console.log('something went wrong'));
};

