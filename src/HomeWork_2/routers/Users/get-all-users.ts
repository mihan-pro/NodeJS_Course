import { getAllUsers } from '../../data-access/Users/get-all-users';
import { Router } from 'express';
import { logRequestData } from '../../helpers/log-request-data';
export { Router } from 'express';

export const getUsersRouter = Router();
getUsersRouter.get('/getAllUsers', async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.status(200).end(JSON.stringify(users, null, 2));
  } catch (err) {
    logRequestData(req, true);
    next(err);
  }
});

