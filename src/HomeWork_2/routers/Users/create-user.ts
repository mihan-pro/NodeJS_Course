import { createUser } from '../../services/Users/create-user';
import { Router } from 'express';
import { logRequestData } from '../../helpers/log-request-data';

export const createUserRouter = Router();
createUserRouter.post('/', async (req, res, next) => {
  try {
    const error = await createUser(req.body);
    if (error) {
      res.status(400);
      res.end(error.message);
      return;
    }
    res.status(200).end('ok');
  } catch (err) {
    logRequestData(req, true);
    next(err);
  }
});
