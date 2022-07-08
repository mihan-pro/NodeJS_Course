import { Sequelize } from "sequelize";

export const closeSequelizeConnection = (client: Sequelize) => {
  client.close()
    .then(() =>  console.log('connection was closed'))
    .catch(() => console.log('everything is on fire'));
};
