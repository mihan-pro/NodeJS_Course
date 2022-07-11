import { Router } from 'express';
import { addUserToGroupHandler } from './add-user-to-group';
import { addUsersToGroupHandler } from './add-users-to-group';

export const UserGroupRouter = Router();

UserGroupRouter.post('/', addUserToGroupHandler);
UserGroupRouter.post('/addUsers', addUsersToGroupHandler);
