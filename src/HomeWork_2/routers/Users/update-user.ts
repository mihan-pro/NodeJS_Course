import { Router } from 'express';
import { updateUserService } from '../../services/Users/update-user';

export const updateUserRouter = Router();

updateUserRouter.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { body } =  req;
    const error = await updateUserService(id, body);
    if (error) {
      res.status(error.status);
      res.end(error.message);
      return;
    }
    res.status(200);
    res.send('ok');
    res.end();
  } catch (err) {
    res.status(500);
    res.end(err);
  }
});
