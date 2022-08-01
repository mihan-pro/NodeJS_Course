import { Router } from 'express';
import { loginService } from '../services/Users/login';

export const LoginRouter = Router();

LoginRouter.get('/', async (req, res) => {
  const token = await loginService(req.body);
  if (token) {
    res.header({ Authorisation: token }).end();
  } else {
    res.status(404).end();
  }
});
