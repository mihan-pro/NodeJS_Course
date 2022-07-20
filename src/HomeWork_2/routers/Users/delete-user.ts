import { Router } from 'express';
import { deleteUserService } from '../../services/Users/delete-user';
import { logRequestData } from '../../helpers/log-request-data';

export const deleteUserRouter = Router();

deleteUserRouter.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteUserService(id);
    if (result) {
      res.status(200);
      res.end();
    } else {
      res.status(404);
      res.end('The user hadn\'t been found');
    }
  } catch (err) {
    logRequestData(req, true);
    next(err);
  }
});
