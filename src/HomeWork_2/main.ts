import express from 'express';
import dotenv from 'dotenv';
import { openSequelizeConnection } from './data-access/open-sequelize-connection';
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
import cors from 'cors/lib/index';

dotenv.config();
export const server = express();

export const sequelize = openSequelizeConnection();
export const Users = getUserModel(sequelize);
export const Groups = getGroupsModel(sequelize);
export const UserGroups = getUserGroupModel(sequelize);

server
  .use(express.json())
  .use(cors({ origin: process.env.CORS_ADDRESS }))
  .use(logServiceRequest)
  .use(ROUTES.LOGIN, LoginRouter)
  .use(ROUTES.USERS, checkAuthorisation, UsersRouter)
  .use(ROUTES.GROUPS, checkAuthorisation, GroupsRouter)
  .use(ROUTES.USER_GROUPS, checkAuthorisation, UserGroupRouter)
  .use(logError);

process.on('uncaughtException', errorHandler);
process.on('unhandledRejection', errorHandler);
