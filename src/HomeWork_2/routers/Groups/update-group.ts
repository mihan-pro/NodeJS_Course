import { Request, Response } from 'express';
import { updateGroupService } from '../../services/Groups/update-group';

export  const updateGroupHandler = async ({ params, body }: Request, res: Response) => {
  try {
    const result = await updateGroupService(params.id, body.name, body.permissions);
    if (result[0]) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
};
