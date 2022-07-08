import { getAllUsers } from '../../data-access/get-all-users';
import { Users } from '../../main.js';
import { Router } from 'express';
export { Router } from 'express';

export const getUsersRouter = Router();
getUsersRouter.get('/getAllUsers', async (req, res) => {
  const users = await getAllUsers(Users);
  res.end(users);
});

