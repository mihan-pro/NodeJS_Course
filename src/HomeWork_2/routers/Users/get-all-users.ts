import { getAllUsers } from '../../data-access/Users/get-all-users';
import { Users } from '../../main.js';
import { Router } from 'express';
import { logRequestData } from '../../helpers/log-request-data';
export { Router } from 'express';

export const getUsersRouter = Router();
getUsersRouter.get('/getAllUsers', async (req, res, next) => {
  try {
    const users = await getAllUsers(Users);
    res.status(200).end(users);
  } catch (err) {
    logRequestData(req, true);
    next(err);
  }
});

