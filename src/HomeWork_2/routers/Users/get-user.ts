import { getUserService } from '../../services/Users/get-user';
import { Router } from 'express';

export const getUserRouter = Router();
getUserRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserService(id);
    if (user) {
      res.status(200);
      res.end(JSON.stringify(user));
    } else {
      res.status(404);
      res.end('The user hadn\'t been found');
    }
  } catch (err) {
    res.status(500);
    res.end(err);
  }
});
