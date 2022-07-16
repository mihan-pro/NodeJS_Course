import { createUser } from '../../services/Users/create-user';
import { Router } from 'express';

export const createUserRouter = Router();
createUserRouter.post('/', async (req, res) => {
  try {
    const error = await createUser(req.body);
    if (error) {
      res.status(400);
      res.end(error.message);
      return;
    }
    res.status(200);
    res.end('ok');
  } catch (err) {
    res.status(500);
    res.end(err);
  }
});
