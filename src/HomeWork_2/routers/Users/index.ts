import { Router } from 'express';
import { getUsersRouter } from './get-all-users';
import { getUserRouter } from './get-user';
import { updateUserRouter } from './update-user';
import { createUserRouter } from './create-user';
import { deleteUserRouter } from './delete-user';

export const UsersRouter = Router();

UsersRouter
  .use('/', getUsersRouter)
  .use('/', getUserRouter)
  .use('/', updateUserRouter)
  .use('/', createUserRouter)
  .use('/', deleteUserRouter);
