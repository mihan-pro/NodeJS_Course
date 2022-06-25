import { Router } from 'express';
import { deleteUserService } from '../../services/delete-user';

export const deleteUserRouter = Router();

deleteUserRouter.delete('/:id', async (req, res) => {
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
    res.status(500);
    res.end(err);
  }
});
