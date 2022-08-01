import express from 'express';
import dotenv from 'dotenv';
import { openSequelizeConnection } from './data-access/open-sequelize-connection';
import { checkConnection } from './data-access/check-connection';
import { initApp } from './services/init-app';
import { getUserModel } from './data-access/Users/get-user-model';
import { UsersRouter } from './routers/Users';
import { GroupsRouter } from './routers/Groups';
import { ROUTES } from './constants';
import { getGroupsModel } from './data-access/Groups/get-group-model';
import { getUserGroupModel } from './data-access/UserGroup/create-user-group-model';
import { UserGroupRouter } from './routers/UserGroup';
import { logServiceRequest } from './middlewares/log-service-request';
import { errorHandler } from './services/error-logger';
import { logError } from './middlewares/log-error';
import { LoginRouter } from './routers/login';
import { checkAuthorisation } from './middlewares/check-authorisation';

dotenv.config();
const server = express();

export const sequelize = openSequelizeConnection();
export const Users = getUserModel(sequelize);
export const Groups = getGroupsModel(sequelize);
export const UserGroups = getUserGroupModel(sequelize);

checkConnection(sequelize);

server
  .use(express.json())
  .use(logServiceRequest)
  .use(ROUTES.LOGIN, LoginRouter)
  .use(ROUTES.USERS, checkAuthorisation, UsersRouter)
  .use(ROUTES.GROUPS, checkAuthorisation, GroupsRouter)
  .use(ROUTES.USER_GROUPS, checkAuthorisation, UserGroupRouter)
  .use(logError);

server.listen(process.env.PORT, () => {
  initApp();
  console.log(`Server started on port ${process.env.PORT}`);
});

process.on('uncaughtException', errorHandler);
process.on('unhandledRejection', errorHandler);
