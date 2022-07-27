import { Router } from 'express';
import { updateUserService } from '../../services/Users/update-user';
import { logRequestData } from '../../helpers/log-request-data';

export const updateUserRouter = Router();

updateUserRouter.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } =  req;
    const error = await updateUserService(id, body);
    if (error) {
      res.status(error.status);
      res.end(error.message);
      return;
    }
    res.status(200).end('ok');
  } catch (err) {
    logRequestData(req, true);
    next(err);
  }
});
