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

dotenv.config();
const server = express();
server.use(express.json());

export const sequelize = openSequelizeConnection();
export const Users = getUserModel(sequelize);
export const Groups = getGroupsModel(sequelize);
export const UserGroups = getUserGroupModel(sequelize);

checkConnection(sequelize);

server.use(ROUTES.USERS, UsersRouter);
server.use(ROUTES.GROUPS, GroupsRouter);
server.use(ROUTES.USER_GROUPS, UserGroupRouter);

server.listen(process.env.PORT, () => {
  initApp();
  console.log(`Server started on port ${process.env.PORT}`);
});
