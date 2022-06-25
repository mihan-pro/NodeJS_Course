import express from 'express';
import dotenv from 'dotenv';
import { openSequelizeConnection } from './data-access/open-sequelize-connection';
import { checkConnection } from './data-access/check-connection';
import { initApp } from './services/init-app';
import { getUserModel } from './data-access/get-user-model';
import { UsersRouter } from './routers/Users';

dotenv.config();
const server = express();
server.use(express.json());
const sequelize = openSequelizeConnection();
export const Users = getUserModel(sequelize);
checkConnection(sequelize);

server.use('/Users', UsersRouter);

server.listen(process.env.PORT, () => {
  initApp();
  console.log(`Server started on port ${process.env.PORT}`);
});
